import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import { components } from "../data/components.js";
import { text } from "../utils/helpers.js";

export function registerGetComponent(server: McpServer) {
  server.registerTool(
    "get_component",
    {
      description:
        "Get details, props and a code example for one NativeBase component by name (e.g. Button, Input, Modal).",
      inputSchema: z.object({
        name: z.string().describe("Component name, e.g. Button"),
      }),
    },
    async ({ name }) => {
      const q = name.toLowerCase();
      const c = components.find((x) => x.name.toLowerCase().split(" / ").includes(q) || x.name.toLowerCase() === q);

      if (!c) {
        return text(
          `Component "${name}" not found. Available: ${components.map((x) => x.name).join(", ")}`,
        );
      }

      return text(`# ${c.name}
Category: ${c.category}
${c.description}

Props: ${c.props.join(", ")}

Example:
\`\`\`tsx
${c.example}
\`\`\``);
    },
  );
}