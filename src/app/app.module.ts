import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTodoModule } from './components/add-todo/add-todo.module';
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    AddTodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
