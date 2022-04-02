import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];

  constructor() { }

  addTodo(todo:Todo){
    this.todos.push(todo);
  }

  getAllTodos(){
    return this.todos;
  }

  updateTodo(index: number, updatedTodo:Todo){
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1);
  }

}
