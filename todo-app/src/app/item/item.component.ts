import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() todo:Todo = {} as Todo;
  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() removeClicked: EventEmitter<void> = new EventEmitter()

  constructor() { }


  ngOnInit(): void {
  }

  onTodoClicked(){
    this.todoClicked.emit()
  }

  onRemoveClick(){
    this.removeClicked.emit()
  }

}

