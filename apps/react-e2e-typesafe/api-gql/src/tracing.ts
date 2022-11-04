import { Tracer, trace } from "@opentelemetry/api";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { Resource } from "@opentelemetry/resources";
import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";
import {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from "@opentelemetry/sdk-trace-base";

export default function initializeTracing(serviceName: string): Tracer {
  const provider = new NodeTracerProvider({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
    }),
  });
  const consoleExporter = new ConsoleSpanExporter();
  provider.addSpanProcessor(new SimpleSpanProcessor(consoleExporter));
  provider.register();
  return trace.getTracer(serviceName);
}
