import { McpServer } from "@modelcontextprotocol/server";
import { registerListComponents } from "./tools/listComponents.js";
import { registerGetComponent } from "./tools/getComponent.js";
import { registerSearchComponents } from "./tools/searchComponents.js";
import { registerGenerateUI } from "./tools/generateUI.js";
import { registerSetupGuide } from "./tools/setupGuide.js";

// serveStdio may call this several times, so always return a fresh instance.
export function createServer() {
  const server = new McpServer({
    name: "BaseUI",
    version: "1.0.0",
  });

  registerListComponents(server);
  registerGetComponent(server);
  registerSearchComponents(server);
  registerGenerateUI(server);
  registerSetupGuide(server);

  return server;
}