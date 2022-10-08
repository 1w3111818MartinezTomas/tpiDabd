import { TestBed } from '@angular/core/testing';

import { ServicioCartaService } from './servicio-carta.service';

describe('ServicioCartaService', () => {
  let service: ServicioCartaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCartaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
