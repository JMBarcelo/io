import { Component, OnInit } from '@angular/core';

import { CounterService } from '../counter.service';


@Component({
  selector: 'app-counter-1',
  templateUrl: './counter-1.component.html',
  styleUrls: ['./counter-1.component.css'],
  providers: [
    CounterService
  ],
})
export class Counter1Component implements OnInit {

  constructor(private counter: CounterService) { }

  ngOnInit() {
  }

  increase() {
    this.counter.increment();
    console.log('increase 1', this.counter.count);
  }
}
