import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  // Property binding for routes is only required if passing parameters
  template: `
    <ul>
      <li><a routerLink="">Home</a></li>
      <li><a routerLink="messages">Messages</a></li>
      <li><a routerLink="photos">Photos</a></li>
      <li><a [routerLink]="['photos', 1]">Photo Details</a></li>
    </ul>
    <button (click)="onClick()" >Click me!</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor(private _router: Router)
  {
  }
  
  onClick()
  {
    this._router.navigate(['photos', 2]);
  }
}