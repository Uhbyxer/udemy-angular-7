import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import 'rxjs-compat/add/observable/interval';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersSubscription: Subscription;
  customSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);

    this.numbersSubscription = myNumbers.subscribe((number: number) => {
      console.log(number);
    });

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);

      setTimeout(() => {
        observer.next('second package');
      }, 4000);

      setTimeout(() => {
        observer.error('Does not work');
      }, 5000);

      setTimeout(() => {
        observer.complete();
      }, 6000);

      setTimeout(() => {
        observer.next('third package');
      }, 7000);
    });

    this.customSubscription =  myObservable.subscribe(
      (data: string) => {console.log(data); },
      (error: string) => {console.log(error); },
      () => {console.log('completed'); }
      );
  }

  ngOnDestroy(): void {
    this.numbersSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }

}
