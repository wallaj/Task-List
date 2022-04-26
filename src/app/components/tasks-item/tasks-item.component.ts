import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { TAREAS } from 'src/app/mock-task';//Importamos el módulo TAREAS
import { faTimes } from '@fortawesome/free-solid-svg-icons';//importamos icnono faTimes
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task:Task = TAREAS[0]; //Recibe una tarea del 'template tasks'
  @Output() onDeleteTask:EventEmitter<Task> =  new EventEmitter(); //Al hacer click (evento), saca la función del componente task-item 
  //para manejarla desde el componente task
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter(); //Emite el evento que se trata de cambiar la condicion reminder del task
  
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task:Task){//Emisión del Evento para borrar la tarea selecionada enviada como parametro
    this.onDeleteTask.emit(task);
  }
  onToggle(task:Task){
    this.onToggleReminder.emit(task); //Emisión del evento con el parametro indicado  
  }
}
