import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todos: Array<string> = [
    'Task1',
    'Task2',
    'Task3',
    'Task4',
    'Task5',
  ];

  myName = 'NOMBRE';

  constructor() { }

  ngOnInit() {
  }

  warning(todo) {
    console.log('han pulsado un boton', todo);
    this.todos = this.todos.filter(t => t !== todo)
  }

  changeMyName() {
    this.myName = 'OTRO NOMBRE';
  }
}
