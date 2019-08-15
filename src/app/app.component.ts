import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  profile: { name: string; age: number } = {
    name: 'Semlinker',
    age: 31
  };
  constructor(){

  }
  ngOnInit(): void {
    setTimeout(() => {
      this.profile = Object.assign({}, this.profile, {name: 'fer'});
     }, 2000);

     this.test(1);
  }

  test(test: number): void{

  }
}
