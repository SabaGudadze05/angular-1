import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-chat-friend',
  standalone: false,
  templateUrl: './chat-friend.component.html',
  styleUrl: './chat-friend.component.scss',
})
export class ChatFriendComponent {
  @Output() SendMessageFromFriend = new EventEmitter<string>();
  @Input() recieved: string = '';

  inputMessage: string = '';

  // @ViewChild('messageInput') input!: ElementRef;
  addEmojy(emojy: string) {
    this.inputMessage += emojy;
    console.log(this.inputMessage);
  }
  sentMessage: string = '';
  sendMessage() {
    if (this.inputMessage === '') {
      return;
    }
    // this.sentMessage = 'You:  ' + this.inputMessage;
    this.SendMessageFromFriend.emit(this.inputMessage);
    this.sentMessage = 'You:  ' + this.inputMessage;
    console.log('This message sent: ' + this.inputMessage);
    this.inputMessage = '';
  }
}
