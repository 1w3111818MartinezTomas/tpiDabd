import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  @Input()
  cardNumber:string;

  @Input('cardURL')
  cardURL:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
