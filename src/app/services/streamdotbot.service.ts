import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StreamdotbotService extends WebSocket {
  constructor(
  ) {
    let socketPort = 6942;
    super(`ws://localhost:${socketPort}/`);
  }

}
