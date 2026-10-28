import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import { components } from "../data/components.js";
import { score, text } from "../utils/helpers.js";

export function registerSearchComponents(server: McpServer) {
  server.registerTool(
    "search_components",
    {
      description:
        "Search gluestack-ui v5 components by intent, e.g. 'dropdown', 'loading indicator', 'user picture'. Returns the best matches with examples.",
      inputSchema: z.object({
        query: z.string().describe("What UI element you need"),
        limit: z.number().int().min(1).max(10).default(5).describe("Max results"),
      }),
    },
    async ({ query, limit }) => {
      const ranked = components
        .map((c) => ({ c, s: score(query, [c.name, c.description, ...c.keywords]) }))
        .filter((r) => r.s > 0)
        .sort((a, b) => b.s - a.s)
        .slice(0, limit);

      if (!ranked.length) return text(`No components matched "${query}". Try list_components.`);

      return text(
        ranked
          .map(({ c }) => `## ${c.name}\n${c.description}\n\`\`\`tsx\n${c.example}\n\`\`\``)
          .join("\n\n"),
      );
    },
  );
}