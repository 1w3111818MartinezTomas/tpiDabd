import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorListadoComponent } from './jugador-listado.component';

describe('JugadorListadoComponent', () => {
  let component: JugadorListadoComponent;
  let fixture: ComponentFixture<JugadorListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadorListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
