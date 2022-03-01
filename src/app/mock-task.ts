import {Task} from "./Task"; //importamos la interface Task
export const TAREAS: Task[] = [
    {
        id: 1,
        text: "Terminar Angular",
        day: 'Marzo 1 22:00',
        reminder:true
    },
    {
        id: 2,
        text: "Investigar Bootstrap",
        day: 'Marzo 2 todo el día',
        reminder:true
    },
    {
        id: 3,
        text: "Seguir con BBDD",
        day: 'Marzo 1 22:00',
        reminder:false
    }
]