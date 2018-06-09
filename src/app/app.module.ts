import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './containers/home-page/home-page.component';
import { SelectComponent } from './components/select/select.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { MessageInputBarComponent } from './components/message-input-bar/message-input-bar.component';
import { FutureToggleComponent } from './components/future-toggle/future-toggle.component';
import { SendComponent } from './components/send/send.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class AppModule { }
