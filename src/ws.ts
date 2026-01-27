import Connection from "./helpers/Connection.ts";
import Messanger from "./helpers/Messanger.ts";
import type { HangmanWebSocket, Users } from "./types.d.ts";

class WSI {
  ws: HangmanWebSocket;
  users: Users = {};

  constructor(ws: HangmanWebSocket, users: Users) {
    this.ws = ws;
    this.users = users;
  }

  onMessage(message: string) {
    try {
      const msgParsed = JSON.parse(message);
      const messanger = new Messanger();
      const cnn = new Connection(this.users);

      if ("type" in msgParsed) {
        switch (msgParsed.type) {
          case "login":
            cnn.login(this.ws, msgParsed.username);
            break;
          case "offer":
            cnn.offer(this.ws, msgParsed.username, msgParsed.offer);
            break;
          case "answer":
            cnn.answer(this.ws, msgParsed.username, msgParsed.answer);
            break;
          default:
            messanger.error(this.ws, `Unrecognized command: ${msgParsed.type}`);
            break;
        }
      } else {
        throw new Error("type is missing");
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default WSI;
