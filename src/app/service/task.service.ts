import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';//Observable
import {HttpClient, HttpHeaders} from '@angular/common/http';//importamos http cliente y http handler y headers para 
//hacer llamadas GET y POST
import { Task } from 'src/app/Task';//importamos la interface del módulo TAREAS
import { TAREAS } from 'src/app/mock-task';//Importamos el módulo TAREAS

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
  //header que se mandan en la peticion es una instancia de un HttpHeaders y contenido del mismo es una aplicacion de tipo Json
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks'; //URL de la "bbdd" json
  constructor(
    private http:HttpClient // inicializamos la interface HttpClient
  ){ }

  getTask(): Observable<Task[]>{ //método 'getTask' definido como observable para que funcione asincronamente
    return this.http.get<Task[]>(this.apiURL); //petición GET al servidor con los datos de la bbdd, guardados en Task[]
  }

  deleteTask(task:Task):Observable<Task>{
    const url = `${this.apiURL}/${task.id}`; // http://localhost:5000/tasks/id
    return this.http.delete<Task>(url);  //borra una tarea dentro del json bbdd que tenga el parametro recibido como id
  }
  updateTaskReminder(task:Task):Observable<Task>{
    const url = `${this.apiURL}/${task.id}`; // http://localhost:5000/tasks/id  
    return this.http.put<Task>(url, task, httpOptions); //PUT, consulta http para actualizar un campo. 
    //Busca el registro a reemplazar(url) y lo reemplaza con el objeto que le enviamos (task) y le informamos al backend 
    //que lo enviado es un Json
  }
}
