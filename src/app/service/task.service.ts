import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';//Observable
import {HttpClient,HttpHandler} from '@angular/common/http';//importamos http cliente y http handler para hacer llamadas GET y POST
import { Task } from 'src/app/Task';//importamos la interface del módulo TAREAS
import { TAREAS } from 'src/app/mock-task';//Importamos el módulo TAREAS


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
}
