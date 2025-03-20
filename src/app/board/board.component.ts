import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: false,
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  messageFromFriend: string = '';
  messageFromMe: string = '';

  yourSend(message: string) {
    this.messageFromMe = message;
  }
  friendSend(message: string) {
    this.messageFromFriend = message;
  }
}
