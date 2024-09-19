import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private socket: Socket) {}

  joinChannel(channelId: string) {
    this.socket.emit('joinChannel', { channelId });
  }

  sendMessage(channelId: string, message: string) {
    this.socket.emit('message', { channelId, message });
  }

  getMessages(): Observable<string> {
    return this.socket.fromEvent<string>('message');
  }
}
