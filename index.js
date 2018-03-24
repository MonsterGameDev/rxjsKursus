var button = document.querySelector('button');
//*******************************************************************
//good ond addEventListener(eventName:string, function(event){ ... })
    //button.addEventListener('click', (e) => {console.log("event")});
//*******************************************************************

//*******************************************************************
//Intro: fromEvent, subscribe, trottleTime and map
    // Rx.Observable.fromEvent(button, 'click')
    //     .throttleTime(1000)
    //     .map((event) => {
    //         return{
    //         x: event.clientX,
    //         y: event.clientY}
    //     })
    //     .subscribe(
    //         (data) => console.log(data.x + " " + data.y)
    //     )
//*******************************************************************

//*******************************************************************¨
//Udpenslet Observer
    // var observer = {
    //     next: value => { console.log (value); },
    //     error: e => { console.log (e); },
    //     complete: () => { console.log ("complete"); }
    // }

    // Rx.Observable.fromEvent(button,'click')
    //     .subscribe(observer);
//*******************************************************************

//*******************************************************************
//Creating an Observable from scratch - the create-method
        // var observer = {
        //     next: (value) => { console.log (value); },
        //     error: (e) => { console.log (e); },
        //     complete: () => { console.log ("completed!"); }
        // }

        // //Sync ex
        // // Rx.Observable.create(obs => {
        // //     obs.next('payload'),
        // //     //obs.error('terrible shit happened')
        // //     obs.complete()
        // // } )
        // //     .subscribe(observer);

        // //ASync ex
        // var myObservable = Rx.Observable.create(obs => {
        //     obs.next ('sync payload')
            
        //     setTimeout( () => {
        //         obs.next('async payload'),
        //         //obs.error('terrible shit happened')
        //         obs.complete()
        //         }, 2000);
            
        //     //Du kan trigge "next" i events også
        //     button.onclick = (event) => { obs.next(event) }
        // })
        //     .subscribe(observer);
        
        // //remember to unsubscribe when done
        // setTimeout(() => {
        //     myObservable.unsubscribe();
        // }, 5000);
//*******************************************************************

//*******************************************************************
//Create an observable with interval
    // var myObservable = Rx.Observable.interval(1000);

    // var observer = {
    //     next: v => {
    //         console.log('Value', v)
    //     },
    //     error: e => {
    //         console.log('Error', e)
    //     },
    //     complete: () => {
    //         console.log('Completed')
    //     }
    // }

    // //straight forward
    // //myObservable.subscribe(observer);

    // //operator: map
    // myObservable.map(value => { 
    //     return value * 2; 
    // }).subscribe(observer);


//*******************************************************************

//*******************************************************************
// Subject - rxjs´s svar på simpel EventEmitter
    // var subject = new Rx.Subject();

    // subject.subscribe({
    //     next: v => { console.log (v);},
    //     error: e => { console.log (e);},
    //     complete: () => { console.log("complete!")}
    // });

    // subject.subscribe(value => console.log ("subscription 2"))

    // subject.next ('payload');


//*******************************************************************

//*******************************************************************
// filter()
    // var observable = Rx.Observable.interval(1000);

    // observable
    // .filter(value => {
    //     return value % 2 == 0;
    // })
    // .subscribe(
    //     v => {
    //         console.log('Value', v)
    //     },
    //     e => {
    //         console.log('Error', e)
    //     },
    //     () => {
    //         console.log('Completed')
    //     }
    // );
//*******************************************************************

//*******************************************************************
// reduce() & scan() 
    // var observable = Rx.Observable.of(1,2,3,4,5)
    // // .reduce ((total, currentValue) => {
    // //     return total + currentValue;
    // // }, 0)
    // .scan ((total, currentValue) => {
    //     return total + currentValue;
    // }, 0)
    // .subscribe(
    //     v => { console.log(v) },
    //     e => { console.log(e) },
    //     () => { console.log('complete') }
    // );
//*******************************************************************

//*******************************************************************
//mergemap  (se: index.html)

    // var input1 = document.getElementById('input1');
    // var input2 = document.getElementById('input2');

    // var span = document.querySelector('span');


    // var obs1 = Rx.Observable.fromEvent(input1,'input')
    // var obs2 = Rx.Observable.fromEvent(input2,'input')

    // obs1.mergeMap(
    //     event1 =>  {
    //         return obs2.map(event2 => event1.target.value + ' ' + event2.target.value);
    //     }
    // ).subscribe (
    //     mergedText => span.textContent = mergedText
    // )
//*******************************************************************

//*******************************************************************
//switchMap() - returning another observable.
var obs1 = Rx.Observable.fromEvent(button, 'click');
var obs2 = Rx.Observable.interval(1000);

obs1.switchMap( event => {
    return obs2; //starter iøvrigt forfra hvergang triggered...
}).subscribe (
    v => console.log(v)
)

//*******************************************************************

