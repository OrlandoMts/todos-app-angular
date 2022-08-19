import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _modal: boolean = false;
  constructor() { }

  get modal() {
    return this._modal;
  }

  stateModal() {
    this._modal = !this._modal;
  }
}
