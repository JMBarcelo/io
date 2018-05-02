import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnChanges {
  @Input() name: string;
  @Output() onButton = new EventEmitter<string>();

  nameWithExclamation: string;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.name);
    this.onButton.emit(this.name);
  }

  ngOnChanges() {
    console.log('something has changed');
    this.nameWithExclamation = `${this.name}!!!`;
  }

}
