import { TestBed } from '@angular/core/testing';

import { NombrePaginaService } from './nombre-pagina.service';

describe('NombrePaginaService', () => {
  let service: NombrePaginaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NombrePaginaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
