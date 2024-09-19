import {Component, NgModule, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../services/chat.service';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  standalone: true,
  styleUrls: ['./chat-room.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [ChatService]

})



export class ChatRoomComponent implements OnInit {
  messages: string[] = [];
  newMessage: string = '';
  channelId: string = '';

  constructor(private chatService: ChatService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.channelId = this.route.snapshot.paramMap.get('channelId')!;
    this.chatService.joinChannel(this.channelId);

    this.chatService.getMessages().subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.channelId, this.newMessage);
      this.newMessage = '';
    }
  }
}
