import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadorListadoComponent } from './jugadores/jugador-listado/jugador-listado.component';

const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
