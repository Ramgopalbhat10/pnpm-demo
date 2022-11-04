import { createServer } from "@graphql-yoga/node";
import type { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";
import { readFileSync } from "fs";
import { Resolvers } from "../../types";

const typeDefs = readFileSync(join(process.cwd(), "schema.graphql"), {
  encoding: "utf-8",
});
const resolvers: Resolvers = {
  Query: {
    cart: (_, { id }) => {
      return {
        id,
        totalItems: 0,
      };
    },
  },
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default createServer<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: {
    typeDefs,
    resolvers,
  },
});
