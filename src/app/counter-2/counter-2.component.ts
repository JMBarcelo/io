import { Component, OnInit } from '@angular/core';

import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-2',
  templateUrl: './counter-2.component.html',
  styleUrls: ['./counter-2.component.css'],
  providers: [
    CounterService
  ],
})
export class Counter2Component implements OnInit {

  constructor(private counter: CounterService) { }

  ngOnInit() {
  }

  increase() {
    this.counter.increment();
    console.log('increase 2');
  }

}


