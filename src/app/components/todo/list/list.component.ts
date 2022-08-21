import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  get listTodos(): Todo[] {
    return this.todoService.todos;
  }

  completeTodo(indexTodo: number) {
    this.todoService.completeTodo(indexTodo);

  }

}
