import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _modal: boolean = true; // debe de ir en false
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
  }

  completeTodo(index: number): void{
    const completed = true;
  }
  constructor() { }
}
