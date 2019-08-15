import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-function-test',
  templateUrl: './function-test.component.html',
  styleUrls: ['./function-test.component.css']
})
export class FunctionTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const add = (a, b) => a + b
    const mul = (a, b) => a * b
    const sub = (a, b) => a - b

    sub(add(5, 6), mul(1, 3))
    this.test1();
    this.test2();
  }

  test1() :void{
    var arr = [1, 2, 3, 4, 5];
    arr.slice(0, 3); // [1, 2, 3]
    console.log(arr)
    arr.slice(0, 3); // [1, 2, 3]
    console.log(arr)
    arr.slice(0, 3); // [1, 2, 3]
    console.log(arr)
    console.log("==========================================")

    var arr = [1, 2, 3, 4, 5];

    arr.splice(0, 3); // [1, 2, 3]
    console.log(arr)
    arr.splice(0, 3); // [4, 5]
    console.log(arr)
    arr.slice(0, 3); // []
    console.log(arr)
  }

  test2() :void{
    function double(arr:Array<number>) {
      const results = []
      for (let i = 0; i < arr.length; i++){
      results.push(arr[i] * 2)
      }
      return results
      }

    function addOne(arr:Array<number>) {
      const results = []
      for (let i = 0; i < arr.length; i++){
      results.push(arr[i] + 1)
      }
      return results
      }

      const double2 = (arr:Array<number>) => arr.map(item => item * 2);
      const addOne2 = (arr:Array<number>) => arr.map(item => item + 1);
    console.log("==========================================")
    const oneArray = [1, 2, 3];
    const anotherArray = double(oneArray);
    console.log(`oneArray:${oneArray}`)
    console.log(`anotherArray:${anotherArray}`);
    console.log("==========================================")
    // const arrayPush = (arr:Array<number>, newArray:number) :Array<number> =>{
    //   arr.push(newArray);
    //   return arr;
    // }
    const arrayPush = (arr:Array<number>, newArray:number) :Array<number> => [...arr, newArray]
    const originalArray = [1, 2, 3];
    const pushedArray = arrayPush(originalArray, 4);
    const doubledPushedArray = double(pushedArray);
    console.log(originalArray);
    console.log(doubledPushedArray);
   }

   test3(){

   }

}
