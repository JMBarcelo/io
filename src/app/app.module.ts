import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { LogoutComponent } from './logout/logout.component';
import { Error404Component } from './error404/error404.component';

import { CounterService } from './counter.service';
import { Counter1Component } from './counter-1/counter-1.component';
import { Counter2Component } from './counter-2/counter-2.component';


const routes = [
  { path: '', pathMatch: 'full', component: MyHomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'logout',  component: LogoutComponent },
  { path: 'main/:username',  component: MainComponent },
  { path: '**',  component: Error404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    ListTodoComponent,
    TodoItemComponent,
    MyHomeComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    LogoutComponent,
    Error404Component,
    Counter1Component,
    Counter2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
