import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTodoComponent } from './form-todo/form-todo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormTodoComponent
  ],
  exports: [
    FormTodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AddTodoModule { }
