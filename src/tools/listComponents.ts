import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import { components } from "../data/components.js";
import { text } from "../utils/helpers.js";
import { templates } from "../data/templates.js";

export function registerListComponents(server: McpServer) {
  server.registerTool(
    "list_components",
    {
      description:
        "List all NativeBase components and ready-made screen templates available in BaseUI, optionally filtered by category.",
      inputSchema: z.object({
        category: z
          .enum(["layout", "typography", "form", "feedback", "data", "action", "media"])
          .optional()
          .describe("Filter components by category"),
      }),
    },
    async ({ category }) => {
      const list = components
        .filter((c) => !category || c.category === category)
        .map((c) => `- ${c.name} [${c.category}]: ${c.description}`)
        .join("\n");

      const tpl = templates.map((t) => `- ${t.id}: ${t.name} - ${t.description}`).join("\n");

      return text(`## Components\n${list}\n\n## Screen templates\n${tpl}`);
    },
  );
}