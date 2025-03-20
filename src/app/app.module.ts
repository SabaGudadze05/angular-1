import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { BoardComponent } from './board/board.component';
import { ChatYouComponent } from './chat-you/chat-you.component';
import { ChatFriendComponent } from './chat-friend/chat-friend.component';

@NgModule({
  declarations: [AppComponent, ProfileComponent, CounterAppComponent, BoardComponent, ChatYouComponent, ChatFriendComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
