//definimos la interface task
export interface Task{
    id?:number, //id opcional
    text: string;
    day:string;
    reminder:boolean
}