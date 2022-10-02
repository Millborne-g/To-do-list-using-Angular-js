import { Component, OnInit } from '@angular/core';

import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!:Todo[];

  inputTodo:string ='';

  constructor() { }

  ngOnInit(): void {
    this.todos =[
      {
        content:"first task",
        completed: false
      },
      
    ]
  }

  taskDone(id:number){
    this.todos.map((value, i) =>{
      if(i == id){
        value.completed = !value.completed
      }

      return value

    })
  }

  taskRemove(id:number){
    this.todos = this.todos.filter((value, i) => i!=id);
  }

  addTask(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo = ''
  }

}
