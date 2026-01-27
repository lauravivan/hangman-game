import { WebSocketServer } from "ws";
import type { HangmanWebSocket, Users } from "./types.d.ts";
import WSI from "./ws.ts";

const server = new WebSocketServer({ port: 8080 });
const users: Users = {};

server.on("connection", function connection(ws: HangmanWebSocket) {
  const wsi = new WSI(ws, users);
  ws.on("message", (message: string) => wsi.onMessage(message));
});
