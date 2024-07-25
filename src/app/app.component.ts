import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listaTurnos: any[] = [];

  agregarTurno(turno: any){
    this.listaTurnos.push(turno);
  }

  eliminarTurnolistado (index:number){
    this.listaTurnos.splice(index, 1);
  }
}
