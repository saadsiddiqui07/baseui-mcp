import { serveStdio } from "@modelcontextprotocol/server/stdio";
import { createServer } from "./server.js";

serveStdio(createServer, {
  onerror: (error) => console.error("BaseUI MCP error:", error),
});

// stderr only: stdout is reserved for JSON-RPC over stdio
console.error("BaseUI MCP server running on stdio");
