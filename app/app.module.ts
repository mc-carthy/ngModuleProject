import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MessagesModule } from './messages/messages.module';
import { PhotosModule } from './photos/photos.module';

import { AppComponent }  from './app.component';


@NgModule({
  imports: [ 
    BrowserModule,
    MessagesModule,
    PhotosModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }