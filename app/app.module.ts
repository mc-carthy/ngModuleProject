import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { Routing } from './app.routing';
import { PhotosRouting } from './photos/photos.routing';
import { MessagesModule } from './messages/messages.module';
import { PhotosModule } from './photos/photos.module';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';


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
  providers: [
    AuthService,
    AuthGuard,
    PreventUnsavedChangesGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }