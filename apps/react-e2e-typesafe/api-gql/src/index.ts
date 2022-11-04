import { createYoga } from "graphql-yoga";
import fastify, { FastifyRequest, FastifyReply } from "fastify";
import { createServer } from "http";
import { schema } from "./schema";
import initializeTracing from "./tracing";

const port = Number(process.env.API_PORT) || 4000;
const app = fastify({ logger: true });
const tracer = initializeTracing("fastify-graphql");

const yoga = createYoga<{
  req: FastifyRequest;
  reply: FastifyReply;
}>({
  logging: {
    debug: (...args) => args.forEach((arg) => app.log.debug(arg)),
    info: (...args) => args.forEach((arg) => app.log.info(arg)),
    warn: (...args) => args.forEach((arg) => app.log.warn(arg)),
    error: (...args) => args.forEach((arg) => app.log.error(arg)),
  },
  schema,
});

app.route({
  url: "/graphql",
  method: ["GET", "POST", "OPTIONS"],
  handler: async (req, reply) => {
    await tracer.startActiveSpan("POST /graphql", async (requestSpan) => {
      try {
        const response = await yoga.handleNodeRequest(req, { req, reply });
        response.headers.forEach((value, key) => {
          reply.header(key, value);
        });
        requestSpan.setAttribute("http.status", 200);
        reply.status(response.status);

        const json = await response.json();
        reply.send(json);

        return reply;
      } catch (e) {
        requestSpan.setAttribute("http.status", 500);
        reply.status(500);
        reply.send({ error: 500, details: e });
      } finally {
        requestSpan.end();
      }
    });
  },
});
app.listen(port);

const server = createServer(yoga);
server.listen(3000, () => {
  console.info(
    "🚀 Graphiql server is running on http://localhost:3000/graphql"
  );
});
