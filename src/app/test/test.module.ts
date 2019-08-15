import { NgModule } from '@angular/core';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { ProfileAgeComponent } from './profile-age.component';
import { ProfileNameComponent } from './profile-name.component';
import { ProfileCardComponent } from './profile-card.component';

const ComArr = [ParentComponent,
    ChildComponent,
    ProfileAgeComponent,
    ProfileNameComponent,
    ProfileCardComponent]

@NgModule({
  declarations: [
  ...ComArr
  ],
  exports: [
    ...ComArr
  ]
})

export class TestModule{}