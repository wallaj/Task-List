import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';//importamos la interface del módulo TAREAS
import { TaskService } from 'src/app/service/task.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor(private servicioTareas: TaskService) { 
    ///inicializamos el servcio en el constructor del task component
  }
  //Cargamos las tareas en el atributo tareas del tasks component
  ngOnInit(): void {
    
    this.servicioTareas.getTask().subscribe((_tasks)=>{
      this.tasks = _tasks
  });
    //cuando 'getTask' finaliza recibe un callback que recibe como parametro las tareas
    //estas tareas se asignan al atributo 'tasks' declarado en el componente
  }
  //El task component no maneja la lógica de las tareas sino que lo hace el servicio task y monta en el tasks component
  //Cada tarea en particular se monta en el componente task-item, con su estilo dado por el template
  //el template de tasks component recorre cada task-item y los monta

  deleteTask(task:Task){
    this.servicioTareas.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter(t => t.id !== task.id)
       //deleteTask recibe una tarea, llama al servcio que borra la tarea, este se enlasa con subcribe() al observable para su 
       //asincrona. Ejecutado el servicio para borrar la tarea, el subscribe  ejcuta un callback donde se llama devuelta al listado de tareas
       //pero filtrandola por el id de la tarea borrada 
     
    });
  }
  toggleReminder(task:Task){
    task.reminder = !task.reminder; //cambia el estado del reminder
    
    this.servicioTareas.updateTaskReminder(task).subscribe();//llama al servicio para actualizarlo en la bbdd
  }
}
