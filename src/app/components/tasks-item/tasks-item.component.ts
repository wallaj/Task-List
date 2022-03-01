import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { TAREAS } from 'src/app/mock-task';//Importamos el módulo TAREAS
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task:Task = TAREAS[0]; //Recibe una tarea del 'template tasks'
  constructor() { }

  ngOnInit(): void {
  }

}
