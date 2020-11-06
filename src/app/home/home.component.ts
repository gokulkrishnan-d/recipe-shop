import { Component, OnDestroy, OnInit, ɵConsole } from '@angular/core';
import {interval, Subscription, Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  

  constructor() { }

  private firstObs: Subscription;

  ngOnInit() {
    // this.firstObs = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const cusObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
          if (count > 10) {
            observer.error(new Error('Count i greater that 10'));
          }
          if (count === 2){
            observer.complete();
          }
          observer.next(count);
          count++;
      }, 1000);
    });

    const customPipe = cusObservable.pipe(map((data: number) => {
      return 'Round: ' + (data + 1);
    }));

    this.firstObs =   customPipe.subscribe(countVal => {
      console.log(countVal);
    }, (error) => {
      console.error(error.message);
    }, () => {
      console.log('completed!');
    });
  }

  ngOnDestroy(): void {
    this.firstObs.unsubscribe();

  }

}
