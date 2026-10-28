# baseui-mcp

An [MCP](https://modelcontextprotocol.io) server that gives AI assistants practical knowledge of **NativeBase v3** UI components for React Native and Expo. Ask for a screen in natural language and get ready-to-use code, component docs, and setup instructions.

## Features

- **Screen generation** — returns a complete screen template for common prompts, or composes one from matching components.
- **Component reference** — props and code examples for 20 NativeBase components.
- **Intent search** — keyword-based search such as `loading indicator` or `user picture`.
- **Setup guidance** — install commands and `NativeBaseProvider` root setup for Expo and React Native CLI.
- **Zero runtime dependencies** beyond the MCP SDK and Zod — all content is bundled.

## Available tools

| Tool | Description |
| --- | --- |
| `generate_ui` | Match a natural-language prompt to a screen template or component set. |
| `list_components` | List all components and templates, optionally filtered by category. |
| `get_component` | Get details, props, and an example for a single component. |
| `search_components` | Search components by intent. |
| `setup_guide` | Get NativeBase installation and provider setup steps. |

**Categories:** `layout`, `typography`, `form`, `feedback`, `data`, `action`, `media`

## Screen templates

- `login` — email/password login with show/hide password
- `profile-card` — user profile card
- `product-card` — scrollable product list with prices and badges
- `settings` — settings list with switches and a language selector

## Requirements

- Node.js 20 or newer
- A React Native or Expo project using NativeBase v3

## Installation

```bash
npm install
npm run build
```

## Usage

Start the server directly:

```bash
npm start
# or
node build/index.js
```

The server communicates over **stdio**, so configure it in your MCP client instead. For example:

```json
{
  "mcpServers": {
    "baseui": {
      "command": "node",
      "args": ["/absolute/path/to/baseui-mcp/build/index.js"]
    }
  }
}
```

Once connected, ask your assistant things like:

- "Generate a login screen with email and password."
- "Show me how to build a product list with prices."
- "What props does the Modal component take?"
- "Find a dropdown component."
- "How do I set up NativeBase in Expo?"

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

NativeBase is in maintenance mode. Verify version compatibility with your React Native or Expo version at [docs.nativebase.io](https://docs.nativebase.io) before installing.
