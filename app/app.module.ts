import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { Routing } from './app.routing';
import { PhotosRouting } from './photos/photos.routing';
import { MessagesModule } from './messages/messages.module';
import { PhotosModule } from './photos/photos.module';


@NgModule({
  imports: [ 
    BrowserModule,
    PhotosRouting,
    Routing,
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