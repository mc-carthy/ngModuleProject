
import { Component } from '@angular/core';

@Component({
    selector: 'messages',
    template: `
        <h1>Messages</h1>
        <ul>
            <li *ngFor="let m of messages">{{ m }}</li>
        </ul>
    `
})
export class MessagesComponent {
    messages = [ "m1", "m2", "m3 "];
}