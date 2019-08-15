import { Component, Input,  SimpleChange } from '@angular/core';
@Component({
    selector: 'exe-child',
    template: `
    <p>{{ test }}</p>
     <p>{{ text?.name }}</p>
     <button (click)="changeTextProp()">Child改变Text属性</button>
    `
})
export class ChildComponent {
    @Input() text: string;
    @Input() test: string;

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    }

    changeTextProp() {
        this.test = 'Text属性已改变';
    }
}