import { Component, OnInit } from '@angular/core';
import { Observable, of, range } from 'rxjs';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.ofFn();
    this.rangeFn();
  }

  ofFn(){
     const source$ = of(1,2,3);
     source$.subscribe(console.log)
  }

  rangeFn(){
    const source$ = range(1,10);
     source$.subscribe(console.log)
  }

}
