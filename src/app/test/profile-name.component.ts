import { Component, Input} from '@angular/core';

@Component({
    selector: 'profile-name',
    template: `
        <p>Name: {{name}}</p>
    `
})
export class ProfileNameComponent {
   @Input() name: string;
}