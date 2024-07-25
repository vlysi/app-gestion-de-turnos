import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CrearTurnoComponent } from './components/crear-turno/crear-turno.component';
import { ListadoTurnoComponent } from './components/listado-turno/listado-turno.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTurnoComponent,
    ListadoTurnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
