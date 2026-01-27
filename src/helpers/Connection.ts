import type { HangmanWebSocket, Users } from "../types.d.ts";
import Messanger from "./Messanger.ts";

class Connection {
  private users: Users = {};
  private messanger = new Messanger();

  constructor(users: Users) {
    this.users = users;
  }

  login(ws: HangmanWebSocket, username: string) {
    if (!username) this.throwUserNotFound();

    if (this.users[username]) {
      this.messanger.login(ws, false);
    } else {
      this.users[username] = ws;
      ws.username = username;
      this.messanger.login(ws, true);
    }
  }

  offer(ws: HangmanWebSocket, username: string, offer: string) {
    if (!username) this.throwUserNotFound();

    console.log("Sending offer to:", username);

    if (this.users[username]) {
      ws.otherUsername = username;
      this.messanger.offer(this.users[username], offer);
    }
  }

  answer(ws: HangmanWebSocket, username: string, answer: string) {
    if (!username) this.throwUserNotFound();

    console.log("Sending answer to: ", username);

    if (this.users[username]) {
      ws.otherUsername = username;
      this.messanger.answer(this.users[username], answer);
    }
  }

  throwUserNotFound() {
    throw new Error("username not defined");
  }
}

export default Connection;
