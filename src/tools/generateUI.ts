import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import { components } from "../data/components.js";
import { templates } from "../data/templates.js";
import { score, text } from "../utils/helpers.js";

const RULES = `Rules when adapting or composing gluestack-ui v5 code:
- Import components from "@/components/ui/<component>" (e.g. "@/components/ui/button", "@/components/ui/input").
- If a component is missing, add it with \`npx gluestack-ui add <component>\` — never install another UI kit.
- Style with the className prop using semantic tokens (bg-background, text-foreground, border-border, bg-primary, text-muted-foreground, text-destructive). Avoid raw palette classes.
- Root must be wrapped in <GluestackUIProvider mode="system"> with global.css imported (see setup_guide).
- Use onPress, not onClick. Use React Native primitives such as FlatList and ScrollView from "react-native".
- Follow compound APIs (Button/ButtonText, Input/InputField, FormControl/FormControlLabel, Select/SelectTrigger/SelectContent/SelectItem, Modal/ModalContent, etc.).`;

export function registerGenerateUI(server: McpServer) {
  server.registerTool(
    "generate_ui",
    {
      description:
        "Main BaseUI tool. Give a natural-language prompt (e.g. 'login screen', 'product list with price') and get complete gluestack-ui v5 React Native code. Returns the closest screen template, or relevant components to compose from when nothing matches.",
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
Compose the screen yourself from these gluestack-ui v5 components:

${pool.map((c) => `## ${c.name}\n${c.description}\n\`\`\`tsx\n${c.example}\n\`\`\``).join("\n\n")}

${RULES}`);
    },
  );
}