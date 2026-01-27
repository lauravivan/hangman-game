import type { HangmanWebSocket } from "../types.d.ts";

class Messanger {
  error(ws: HangmanWebSocket, message: string) {
    ws.send(
      JSON.stringify({
        type: "error",
        message,
      }),
    );
  }

  login(ws: HangmanWebSocket, success: boolean) {
    ws.send(
      JSON.stringify({
        type: "login",
        success,
      }),
    );
  }

  offer(ws: HangmanWebSocket, offer: string) {
    ws.send(
      JSON.stringify({
        type: "offer",
        offer,
        username: ws.otherUsername,
      }),
    );
  }

  answer(ws: HangmanWebSocket, answer: string) {
    ws.send(
      JSON.stringify({
        type: "answer",
        answer,
        username: ws.otherUsername
      }),
    );
  }
}

export default Messanger;
