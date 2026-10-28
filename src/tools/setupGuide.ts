import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import { text } from "../utils/helpers.js";

export function registerSetupGuide(server: McpServer) {
  server.registerTool(
    "setup_guide",
    {
      description:
        "Get gluestack-ui v5 installation steps, component setup, and the required GluestackUIProvider root configuration for a React Native or Expo app.",
      inputSchema: z.object({
        platform: z.enum(["expo", "react-native-cli"]).describe("Project type"),
      }),
    },
    async ({ platform }) => {
      const engines =
        platform === "expo"
          ? `Choose one styling engine when prompted:
- **NativeWind v5** (Tailwind CSS v4) — works with Expo and React Native CLI
- **UniWind** (Tailwind CSS v4) — Expo only, lighter setup`
          : `Choose **NativeWind v5** (Tailwind CSS v4) when prompted.
UniWind is Expo-only and is not supported for bare React Native CLI projects.`;

      const components = `npx gluestack-ui add --all
# or add only what you need
npx gluestack-ui add button input form-control select`;

      return text(`# gluestack-ui v5 setup (${platform})

gluestack-ui v5 is a copy-paste component library, not a package you import.
Components are generated into your project at \`@/components/ui/<component>\` and
styled with Tailwind CSS v4 via NativeWind v5 or UniWind.

Prerequisites: Expo SDK 50+ (or React Native 0.72.5+), Node.js 16+.
Note: gluestack-ui v5 does not support Next.js yet.

## 1. Initialize
Run this in the project root:
\`\`\`bash
npx gluestack-ui init
\`\`\`

${engines}

The CLI creates \`components/ui\`, the gluestack provider, \`global.css\`, and the
metro/babel/Tailwind configuration for the engine you chose. It also adds the
essential \`icon\`, \`overlay\`, and \`toast\` components and wires the provider into
your app entry file.

## 2. Add components
Unlike v2/v3, components are not installed as npm dependencies:
\`\`\`bash
${components}
\`\`\`

Import them from the generated paths, for example:
\`\`\`tsx
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
\`\`\`

## 3. Import the stylesheet
Import the generated global stylesheet once at the app entry point:
\`\`\`tsx
import "@/global.css";
\`\`\`

## 4. Root provider
\`init\` normally wires this for you. Verify your app root looks like this, or
add it manually if your entry file was not updated:
\`\`\`tsx
import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  return (
    <GluestackUIProvider mode="system">
      <LoginScreen />
    </GluestackUIProvider>
  );
}
\`\`\`

\`mode\` accepts \`"light"\`, \`"dark"\`, or \`"system"\`. The provider is required for
portals and overlays (Modal, Menu, Select, Toast) to render correctly.

Docs: https://gluestack.io/ui/docs/home/getting-started/installation`);
    },
  );
}
