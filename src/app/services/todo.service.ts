import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _modal: boolean = false; // debe de ir en false
  private _todo: Todo[] = []

  get modal(): boolean {
    return this._modal;
  }

  get todos(): Todo[]{
    return [...this._todo];
  }

  stateModal() {
    this._modal = !this._modal;
  }

  registerTodo(todo: Todo) {
    this._todo.unshift(todo);
    localStorage.setItem('todos', JSON.stringify(this._todo) );
  }

  completeTodo(index: number): void{
    let completed: Todo[] = this._todo.splice(index,1);
    const {isComplete} = completed[0]
    console.log(isComplete)
  }
  constructor() {
    // this._todo = JSON.parse(localStorage.getItem('todos')!) || [];
  }
}
