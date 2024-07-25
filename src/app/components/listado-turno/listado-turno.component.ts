import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado-turno',
  templateUrl: './listado-turno.component.html',
  styleUrls: ['./listado-turno.component.css']
})
export class ListadoTurnoComponent implements OnInit {
 @Input() listadoTurnos: any;
 @Output() deleteTurno = new EventEmitter<number>();

 constructor(){}
  ngOnInit(): void {
    
  }

  eliminarTurno(index: number){
    this.deleteTurno.emit(index);
  }
  
}


