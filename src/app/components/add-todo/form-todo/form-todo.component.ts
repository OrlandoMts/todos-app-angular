import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html'
})
export class FormTodoComponent implements OnInit {

  todo: Todo = {
    title: '',
    description: '',
    isComplete: false
  }

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
    this.todo = {
      title: '',
      description: '',
      isComplete: false
    };
  }

  register(){
    //validar vacios antes de enviar valor
    if (this.todo.title.trim().length === 0){
      return
    }
    this.todoService.registerTodo(this.todo)
    // Es par cambiar el estado del modal y que se oculte
    this.handleModal();
    this.todo = {
      title: '',
      description: '',
      isComplete: false
    };
  }
}
