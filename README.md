# baseui-mcp

An [MCP](https://modelcontextprotocol.io) server that gives AI assistants practical knowledge of **gluestack-ui v5** components for React Native and Expo. Ask for a screen in natural language and get ready-to-use code, component docs, and setup instructions.

## Features

- **Screen generation** — returns a complete screen template for common prompts, or composes one from matching components.
- **Component reference** — props and code examples for 31 gluestack-ui v5 components.
- **Intent search** — keyword-based search such as `loading indicator` or `user picture`.
- **Setup guidance** — gluestack-ui v5 CLI install steps, styling engine choice, and `GluestackUIProvider` root setup for Expo and React Native CLI.
- **Zero runtime dependencies** beyond the MCP SDK and Zod — all content is bundled.

## Available tools

| Tool | Description |
| --- | --- |
| `generate_ui` | Match a natural-language prompt to a screen template or component set. |
| `list_components` | List all components and templates, optionally filtered by category. |
| `get_component` | Get details, props, and an example for a single component. |
| `search_components` | Search components by intent. |
| `setup_guide` | Get gluestack-ui v5 installation and provider setup steps. |

**Categories:** `layout`, `typography`, `form`, `feedback`, `data`, `action`, `media`, `overlay`

## Screen templates

- `login` — email/password login with show/hide password
- `profile-card` — user profile card with avatar and stats
- `product-card` — scrollable product list with prices and badges
- `settings` — settings list with switches and a language selector

Templates use gluestack-ui v5 components imported from `@/components/ui/*` and styled with semantic Tailwind tokens via `className`.

## Requirements

- Node.js 20 or newer (for the MCP server)
- For the target app: Expo SDK 50+ or React Native 0.72.5+, using gluestack-ui v5

> gluestack-ui v5 does not currently support Next.js. Use [gluestack-ui v4](https://v4.gluestack.io) for Next.js projects.

## 1. Set up the project

```bash
git clone https://github.com/saadsiddiqui07/baseui-mcp.git
cd baseui-mcp
npm install
```

## 2. Build and test

Compile the TypeScript source:

```bash
npm run build
```

Then verify the server with the MCP Inspector. Both protocol eras should list the same 5 tools: `list_components`, `get_component`, `search_components`, `generate_ui`, `setup_guide`.

```bash
# modern protocol era
npx @modelcontextprotocol/inspector --cli node build/index.js --protocol-era modern --method tools/list

# legacy era
npx @modelcontextprotocol/inspector --cli node build/index.js --protocol-era legacy --method tools/list
```

You can also run the compiled server directly:

```bash
npm start
# or
node build/index.js
```

The server communicates over **stdio**, so normally your MCP client starts it for you.

## 3. Connect to Claude Desktop

Edit `claude_desktop_config.json`:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%AppData%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "BaseUI": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/baseui-mcp/build/index.js"]
    }
  }
}
```

Replace `/ABSOLUTE/PATH/TO/baseui-mcp` with the actual path on your machine. Then **fully quit and restart Claude Desktop** so it picks up the new server.

### Example prompts

- "Using BaseUI, give me a login screen"
- "BaseUI: product list with price and add to cart button"
- "BaseUI: how do I use the Modal component?"
- "BaseUI: settings screen with a dark mode toggle and a language picker, then add a logout button"
- "BaseUI: how do I set up gluestack-ui v5 in Expo?"

The same stdio configuration works with any MCP-compatible client (Cursor, VS Code, etc.) — point its `command` and `args` at `build/index.js`.

## 4. Set up gluestack-ui in your app

The `setup_guide` tool returns the full steps. In short:

```bash
npx gluestack-ui init     # choose NativeWind v5 (Expo + RN CLI) or UniWind (Expo only)
npx gluestack-ui add --all
```

`init` generates `components/ui/`, the provider, `global.css`, and the bundler/Tailwind configuration. Import the stylesheet and wrap the app root:

```tsx
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function App() {
  return (
    <GluestackUIProvider mode="system">
      {/* app */}
    </GluestackUIProvider>
  );
}
```

## 5. Extending it

- **More components:** add an object to `src/data/components.ts`.
- **More screens:** add an object to `src/data/templates.ts` (onboarding, chat, checkout, dashboard, etc.) with good keywords, since matching is keyword-based.
- **Smarter matching:** swap `score()` in `src/utils/helpers.ts` for embeddings later. Since Claude is the caller, even the current keyword search works well because it can combine templates and components itself.
- **Different UI library:** replace the two data files (`components.ts`, `templates.ts`) and the `RULES` text in `src/tools/generateUI.ts`.

After any change, rerun `npm run build`.

## Project structure

```
src/
├── index.ts              # stdio entry point
├── server.ts             # server factory and tool registration
├── data/
│   ├── components.ts     # component docs, props, and examples
│   └── templates.ts      # complete screen templates
├── tools/
│   ├── generateUI.ts
│   ├── getComponent.ts
│   ├── listComponents.ts
│   ├── searchComponents.ts
│   └── setupGuide.ts
└── utils/
    └── helpers.ts        # tokenizing, scoring, text responses
```

## Development

```bash
npm run build   # compile TypeScript to build/
npm start       # run the compiled server
```

`build/` and `node_modules/` are ignored by Git.

## Notes

- gluestack-ui v5 uses copy-paste components. Generated code imports from `@/components/ui/<component>`; the target project must run `npx gluestack-ui add <component>` for any component it does not already have.
- Use semantic tokens (`bg-background`, `text-foreground`, `border-border`, `bg-primary`, `text-muted-foreground`) rather than raw color palette classes.
- Docs: [gluestack-ui v5](https://gluestack.io/ui/docs/home/overview/quick-start)
