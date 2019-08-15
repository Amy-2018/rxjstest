####纯函数
·函数的执⾏过程完全由输⼊参数决定，不会受除参数之外的任何数据
影响。
·函数不会修改任何外部状态，⽐如修改全局变量或传⼊的参数对象。
#### 不纯函数
·改变全局变量的值。
·改变输⼊参数引⽤的对象，就像上⾯不是纯函数的arrayPush实现。
·读取⽤户输⼊，⽐如调⽤了alert或者confirm函数。
·抛出⼀个异常。
·⽹络输⼊/输出操作，⽐如通过AJAX调⽤⼀个服务器的API。
·操作浏览器的DOM。

####　Observable和Observer
Observable就是“可以被观察的对象”即“可被观察者”，⽽
Observer就是“观察者”，连接两者的桥梁就是Observable对象的函数
subscribe。

Observable和Observer
·观察者模式（Observer Pattern）
·迭代器模式（Iterator Pattern）

在编程的世界中，所谓“拉”（pull）或者“推”（push），都是从数据消
费者⾓度的描述，⽐如，在⽹页应⽤中，如果是⽹页主动通过AJAX请求
从服务器获取数据，这是“拉”，如果⽹页和服务器建⽴了websocket通道，
然后，不需要⽹页主动请求，服务器都可以通过websocket通道推送数据到
⽹页中，这是“推”。



⼀个Observable对象只有⼀种终结状态，要么是完结
（complete），要么是出错（error），⼀旦进⼊出错状态，这个Observable
对象也就终结了，再不会调⽤对应Observer的next函数，也不会再调⽤
Observer的complete函数；同样，如果⼀个Observable对象进⼊了完结状
态，也不能再调⽤Observer的next和error。


Observable产⽣的事件，只有Observer通过
subscribe订阅之后才会收到，在unsubscribe之后就不会再收到。