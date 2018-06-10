import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './containers/home-page/home-page.component';
import { SelectComponent } from './components/select/select.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { MessageInputBarComponent } from './components/message-input-bar/message-input-bar.component';
import { FutureToggleComponent } from './components/future-toggle/future-toggle.component';
import { SendComponent } from './components/send/send.component';

import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { ConversationEffects } from './effects/conversation.effects';
import { MessageEffects } from './effects/message.effects';
import { TagEffects } from './effects/tag.effects';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    HomePageComponent,
    SelectComponent,
    MessageInputComponent,
    MessageInputBarComponent,
    FutureToggleComponent,
    SendComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ConversationEffects, MessageEffects, TagEffects]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class AppModule { }
