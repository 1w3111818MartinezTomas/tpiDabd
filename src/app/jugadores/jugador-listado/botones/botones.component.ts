import { Component, OnInit } from '@angular/core';
import { ServicioCarta } from 'src/app/services/servicio-carta.service';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {
  isVisibleMiddle = false;

  constructor(public cartaData: ServicioCarta) { }

  ngOnInit(): void {
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  pedir(){
    this.cartaData.getCartaRandom('user');
    if(this.cartaData.puntajeJugador > 21){
      this.cartaData.resultado = "Perdiste";
    }
  }

  quedarse(){
    while (this.cartaData.puntajeDealer <= 17){
      this.cartaData.getCartaRandom('dealer');
    }
      if(this.cartaData.puntajeDealer < 22 && this.cartaData.puntajeDealer > this.cartaData.puntajeJugador){
        this.cartaData.resultado = "Perdiste!";
      }
      else if(this.cartaData.puntajeDealer < 22 && this.cartaData.puntajeDealer < this.cartaData.puntajeJugador){
        this.cartaData.resultado = "Ganaste!";
        
      }
      else if(this.cartaData.puntajeDealer < 22 && this.cartaData.puntajeDealer === this.cartaData.puntajeJugador){
        this.cartaData.resultado = "Empataste!";
      }
      else if(this.cartaData.puntajeDealer > 21){
        this.cartaData.resultado = "Ganaste!";    
  }
}

  reset(){
    this.cartaData.reset();
    this.showModalMiddle();
  }
}
