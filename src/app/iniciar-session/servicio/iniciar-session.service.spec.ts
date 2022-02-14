import { TestBed } from '@angular/core/testing';

import { IniciarSessionService } from './iniciar-session.service';

describe('IniciarSessionService', () => {
  let service: IniciarSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IniciarSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
