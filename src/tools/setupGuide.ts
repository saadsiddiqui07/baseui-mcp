import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import { text } from "../utils/helpers.js";

export function registerSetupGuide(server: McpServer) {
  server.registerTool(
    "setup_guide",
    {
      description:
        "Get NativeBase installation steps and the required NativeBaseProvider root setup for a React Native or Expo app.",
      inputSchema: z.object({
        platform: z.enum(["expo", "react-native-cli"]).describe("Project type"),
      }),
    },
    async ({ platform }) => {
      const install =
        platform === "expo"
          ? "npx expo install native-base react-native-svg react-native-safe-area-context"
          : "npm install native-base react-native-svg react-native-safe-area-context\ncd ios && pod install";

      return text(`# NativeBase setup (${platform})

NativeBase is in maintenance mode; verify version compatibility with your
React Native / Expo version at https://docs.nativebase.io before installing.

## Install
${install}

## Wrap your app root (App.tsx)
import React from "react";
import { NativeBaseProvider } from "native-base";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <LoginScreen />
    </NativeBaseProvider>
  );
}`);
    },
  );
}