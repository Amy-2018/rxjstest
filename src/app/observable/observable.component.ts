import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.test();
    // this.createObservable();
    // this.time();
    // this.handleError();
    this.handleunscubscribe();
  }
  test(){
    const source$ = of(1,2,3);
    source$.subscribe(console.log)
  }

  createObservable(){
    const source$ = Observable.create(observer =>{
      observer.next(4);
      observer.next(5);
      observer.next(6);
    });
    source$.subscribe(console.log)
  }

  time(){
    const source$ =  Observable.create(observer =>{
       let num = 1;
       const timer = setInterval(() =>{
          observer.next(num++);
          if(num > 3){
            timer && clearInterval(timer);
            observer.complete(); // 终止 否则 Observer依然时刻准备着接收Observable的推送数据，相关的资源也不会被释放
          }
       })
    })

    source$.subscribe({
      next: item => console.log(item),
      complete: () => console.log('No More Data')
      })
  }

/*⼀个Observable对象只有⼀种终结状态，要么是完结
（complete），要么是出错（error），⼀旦进⼊出错状态，这个Observable
对象也就终结了，再不会调⽤对应Observer的next函数，也不会再调⽤
Observer的complete函数；同样，如果⼀个Observable对象进⼊了完结状
态，也不能再调⽤Observer的next和error。*/
  handleError(){
    const source$ = Observable.create(observer =>{
      observer.next(1);
      observer.error('error wrang');
      observer.complete();
    })

    // source$.subscribe({
    //   next: item => console.log(item),
    //   error: err => console.log(err),
    //   complete: () => console.log('no data')
    // })

    source$.subscribe(
       item => console.log(item),
       err => console.log(err), //null,⽤null来作为第⼆个参数，表⽰不处理异常事件。
       () => console.log('no data')
    )

  }

  handleunscubscribe(){
    const source$ = Observable.create(observer => {
      let num = 1;
      const timer = setInterval(() =>{
        // console.log(`in ${num}`)
        observer.next(num++);
      }, 1000)

      return {
        unsubscribe: () =>{
          // observer.complete();
          timer && clearInterval(timer);
        }
      }
    })
    
    const subscription = source$.subscribe(console.log);

    setTimeout(() =>{
      subscription.unsubscribe();
    }, 3000)

    
  }





}
