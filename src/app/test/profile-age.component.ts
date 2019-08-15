import { Component, Input } from '@angular/core';

@Component({
    selector: 'profile-age',
    template: `
        <p>Age: {{age}}</p>
    `
})
export class ProfileAgeComponent {
    @Input() age: number;
}