import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Input toma valores desde el template

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = ""; //las entradas text-color vienen del header.component.html
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter();//Salida  del EventEmitter hacia el header.component.html
  constructor() { }

  ngOnInit(): void {
  }
  onClick():void{
    this.btnClick.emit(); //emite un evento u acción
  }
  
}
