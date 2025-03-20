import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-chat-you',
  standalone: false,
  templateUrl: './chat-you.component.html',
  styleUrl: './chat-you.component.scss',
})
export class ChatYouComponent {
  @Output() SendMessageFromMe = new EventEmitter<string>();
  inputMessage: string = '';
  @Input() recieved: string = 'Frined: ';

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
    this.sentMessage = 'You:  ' + this.inputMessage;
    this.SendMessageFromMe.emit(this.inputMessage);
    console.log('This message sent: ' + this.inputMessage);
    this.inputMessage = '';
  }
}
