import { TodoService } from './../services/todo.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];  

  todoClicked: EventEmitter<void> = new EventEmitter();
  showValidationErrors:boolean = true;


  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getAllTodos();
  }

  onFormSubmit(form: NgForm){
    console.log(form);
    if(form.invalid){
      return this.showValidationErrors = true; 
    }
    this.todoService.addTodo(new Todo(form.value.text));
    form.resetForm();
    return this.showValidationErrors = false;
    
  }

  toggleCompleted(todo:Todo){
    //set todo to completed
    todo.completed = !todo.completed;
  }

  removeItem(index:number){
    this.todoService.deleteTodo(index);
  }

}
