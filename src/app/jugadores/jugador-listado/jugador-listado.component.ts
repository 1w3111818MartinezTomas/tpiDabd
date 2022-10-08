import { Component, OnInit } from '@angular/core';
import { ServicioCarta } from 'src/app/services/servicio-carta.service';

@Component({
  selector: 'app-jugador-listado',
  templateUrl: './jugador-listado.component.html',
  styleUrls: ['./jugador-listado.component.css']
})
export class JugadorListadoComponent implements OnInit {

  constructor(public cartaData: ServicioCarta) { }

  ngOnInit(): void {
  }

}
