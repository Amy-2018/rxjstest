import { Component } from '@angular/core';
import { Observable, of, from, fromEvent, interval, pipe } from 'rxjs';
import { take, takeLast, map, scan} from 'rxjs/operators';
@Component({
    selector: 'parent-selector',
    template: `
   
    `
})


export class ParentComponent {
    stopwatchValue$: Observable<any>;
    people: {name: string} = {
        name: 'test'
    };
    test: string = 'test';
    counter: number = 0;
    timer: number = null;

    constructor(){
        let i = 0;
        this.timer = setInterval(() =>{
             this.people = {
                name: `test${i++}`
            } 
            if(i === 3){
                console.log(i)
                this.stop();
            }
        }, 1000);
    }

    ngOnInit(){
       this.testFn();
    }

    testFn() :void{
        let observable1 = Observable.create((observer: any) => {
            observer.next('hello');
            observer.next('word');
            setTimeout(()=>{
                observer.next('timeout');
            })
        })
        
        // console.log('start');
        // observable1.subscribe((value :any) =>{
        //     console.log(value)
        // })
        // observable1.subscribe((value :any) =>{
        //     console.log(value)
        // })
        // console.log('end');
        
        // of('hello', 'word')
        //     .subscribe(console.log)

        // from([11,22])
        //     .subscribe(console.log)

          
      
        // interval(1000, 5000)
            // .subscribe(console.log)
        
        // interval(1000).pipe(take(9), takeLast(2))
        // .subscribe(console.log)
        
        

        
        
    }

    stop(){
        this.timer && clearInterval(this.timer);
    }

    changeTextProp(){
        this.people.name = '手动修改name的值';
        this.test = '手动修改name的值';
        // this.people = {
        //     name: '手动修改name的值'
        // }
    }

    testRxjs() :void{
        fromEvent(document.body, 'click')
            .pipe(
                map(x => 1),
                scan((acc, x) => acc + x, 0)
            )
            .subscribe((val) => {
                console.log(val)
                this.counter = val;
            }
            )
    }
}