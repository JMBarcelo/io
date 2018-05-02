import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  count: number = 0;
  constructor() { }

  increment() {
    this.count++;
    console.log(`Count is now ${this.count}`);
  }

}

interface User {
  email: string;
  password: string;
}

@Injectable()
export class UserSerivce {
  users: Array<User> = [];

  constructor() { }

  create(email, password) {
    this.users.push({ email, password });
  }

  edit() {

  }

}

@Injectable()
export class Storage {

  constructor() { }

  get(key) {
    localStorage.getItem(key);
  }

  set(key, value) {
    localStorage.setItem(key, value);
  }

}
