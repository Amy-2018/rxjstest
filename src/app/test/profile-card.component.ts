import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'profile-card',
    template: `
       <div>
         <profile-name [name]='profile.name'></profile-name>
         <profile-age [age]='profile.age'></profile-age>
       </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileCardComponent {
    @Input() profile: { name: string; age: number };
}