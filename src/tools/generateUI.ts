import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import { components } from "../data/components.js";
import { templates } from "../data/templates.js";
import { score, text } from "../utils/helpers.js";

const RULES = `Rules when adapting or composing NativeBase code:
- Import everything from "native-base" (NativeBase v3 API).
- Use style props (p, m, bg, rounded, space) instead of StyleSheet.
- Root of the app must be wrapped in <NativeBaseProvider> (see setup_guide).
- Use Pressable/Button onPress, not onClick.`;

export function registerGenerateUI(server: McpServer) {
  server.registerTool(
    "generate_ui",
    {
      description:
        "Main BaseUI tool. Give a natural-language prompt (e.g. 'login screen', 'product list with price') and get complete NativeBase React Native code. Returns the closest screen template, or relevant components to compose from when nothing matches.",
      inputSchema: z.object({
        prompt: z.string().describe("Description of the UI you want"),
      }),
    },
    async ({ prompt }) => {
      const ranked = templates
        .map((t) => ({ t, s: score(prompt, [t.id, t.name, ...t.keywords]) }))
        .sort((a, b) => b.s - a.s);

      const best = ranked[0];

      if (best && best.s > 0) {
        const others = ranked
          .slice(1)
          .filter((r) => r.s > 0)
          .map((r) => r.t.id);

        return text(`# ${best.t.name}
${best.t.description}
Components used: ${best.t.components.join(", ")}
${others.length ? `Other related templates: ${others.join(", ")}\n` : ""}
\`\`\`tsx
${best.t.code}
\`\`\`

${RULES}
Customize this code to match the user's exact prompt: "${prompt}"`);
      }

      const matches = components
        .map((c) => ({ c, s: score(prompt, [c.name, c.description, ...c.keywords]) }))
        .filter((r) => r.s > 0)
        .sort((a, b) => b.s - a.s)
        .slice(0, 6);

      const pool = matches.length ? matches.map((m) => m.c) : components.slice(0, 6);

      return text(`No ready template matched "${prompt}".
Compose the screen yourself from these NativeBase components:

${pool.map((c) => `## ${c.name}\n${c.description}\n\`\`\`tsx\n${c.example}\n\`\`\``).join("\n\n")}

${RULES}`);
    },
  );
}