import { CanDeactivate } from '@angular/router';

import { MessagesComponent } from './messages/messages.component';

export class PreventUnsavedChangesGuard implements CanDeactivate<MessagesComponent> {
    canDeactivate(component: MessagesComponent)
    {
        if (component.form.dirty)
        {
            return confirm("Are you sure?");
        }

        return true;
    }
}