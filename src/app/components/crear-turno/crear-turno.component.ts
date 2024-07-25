import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-turno',
  templateUrl: './crear-turno.component.html',
  styleUrls: ['./crear-turno.component.css']
})
export class CrearTurnoComponent implements OnInit {
  
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';
  formularioIncorrecto = false;
  @Output() nuevoTurno = new EventEmitter<any>();

   
  constructor(){}

  ngOnInit(): void {
    
  }

  agregarTurno(){
    if(this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == ''){
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;
   

    const CITA = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    this.nuevoTurno.emit(CITA);
    this.resetCampos();

  }

  resetCampos() {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }
  

}


