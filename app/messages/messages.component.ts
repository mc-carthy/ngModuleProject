
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormComponent } from '../prevent-unsaved-changes-guard.service';

import { MessagesService } from './messages.service'

@Component({
    selector: 'messages',
    template: `
        <h1>Messages</h1>
        <input type="text" [(ngModel)]="title" />
        <ul>
            <li *ngFor="let m of messages">{{ m }}</li>
        </ul>
    `
})
export class MessagesComponent implements FormComponent {
    messages;
    title = "Hello World!";
    form: FormGroup;

    constructor(private _service: MessagesService)
    {
        this.messages = _service.getMessages();
    }
}