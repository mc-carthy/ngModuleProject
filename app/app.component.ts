import { Component } from '@angular/core';

import { MessagesComponent } from './messages.component';

@Component({
  selector: 'my-app',
  template: '<messages></messages>',
  directives: [MessagesComponent]
})
export class AppComponent { }