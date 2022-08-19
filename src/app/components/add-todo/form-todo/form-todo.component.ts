import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html'
})
export class FormTodoComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }
  
  
  get modal() {
    return this.todoService.modal;
  }

  handleModal() {
    this.todoService.stateModal();
  }
}
