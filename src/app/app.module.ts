import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadorListadoComponent } from './jugadores/jugador-listado/jugador-listado.component';
import { CartaComponent } from './jugadores/jugador-listado/carta/carta.component';
import { BotonesComponent } from './jugadores/jugador-listado/botones/botones.component';


@NgModule({
  declarations: [
    AppComponent,
    JugadorListadoComponent,
    CartaComponent,
    BotonesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
