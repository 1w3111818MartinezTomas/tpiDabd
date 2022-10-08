import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarta {

  allCards = ['2C', '2D', '2H', '2S',
                    '3C', '3D', '3H', '3S',
                    '4C', '4D', '4H', '4S',
                    '5C', '5D', '5H', '5S',
                    '6C', '6D', '6H', '6S',
                    '7C', '7D', '7H', '7S',
                    '8C', '8D', '8H', '8S',
                    '9C', '9D', '9H', '9S',
                    '10C', '10D', '10H', '10S',
                    'JC', 'JD', 'JH', 'JS',
                    'QC', 'QD', 'QH', 'QS',
                    'KC', 'KD', 'KH', 'KS',
                    'AC', 'AD', 'AH', 'AS'];
  
  cartasJugador: any = [];
  cartasDealer: any = [];
  puntajeJugador = 0;
  puntajeDealer = 0;
  cartasDisponibles: any = [];
  resultado = "";

  reset(){
    this.cartasDisponibles = this.allCards.slice();
    this.cartasJugador = [];
    this.cartasDealer = [];
    this.puntajeJugador = 0;
    this.puntajeDealer = 0;
    this.resultado = "";
  }

  constructor() { 
    this.cartasDisponibles = this.allCards.slice();
  }

  getCartaRandom(identity: string){
    let cartaRandom = this.cartasDisponibles.splice(Math.floor(Math.random()*this.cartasDisponibles.length),1)[0];
    let valorCarta:number = this.getValorCarta(cartaRandom, identity);
    if(identity === 'dealer'){
      this.cartasDealer.push(cartaRandom);
      this.puntajeDealer += valorCarta;
    }
    else{
      this.cartasJugador.push(cartaRandom);
      this.puntajeJugador += valorCarta;
    }
  }

  getValorCarta(cardID: string, identity: string){
    let puntaje = 0;
    let valorCarta = 0;
    if(identity === 'dealer'){
      puntaje = this.puntajeDealer;
    }
    else{
      puntaje = this.puntajeJugador;
    }
    let royalCards = ['JC', 'JD', 'JH', 'JS',
                      'QC', 'QD', 'QH', 'QS',
                      'KC', 'KD', 'KH', 'KS'
                      ];
    let aceCards = ['AC', 'AD', 'AH', 'AS'];
    if(royalCards.includes(cardID)){
      valorCarta =  10;
    }
    else if(aceCards.includes(cardID)){
      valorCarta = 11;
      if(puntaje + valorCarta > 21){
        valorCarta = 1;
      }
    }
    else{
      console.log(cardID);
      valorCarta = parseInt(cardID.substring(0, cardID.length-1));
    }
    return valorCarta;
  }

}
