import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }
  
  handleModal(): void {
    this.todoService.stateModal();
  }

}
