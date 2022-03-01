import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';//importamos la interface del módulo TAREAS
import { TAREAS } from 'src/app/mock-task';//Importamos el módulo TAREAS



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TAREAS; //Instaciamos el módulo TAREAS con su interface correspondiente
  
  constructor() { }

  ngOnInit(): void {
  }

}
