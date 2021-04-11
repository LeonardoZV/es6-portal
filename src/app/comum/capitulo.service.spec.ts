import { TestBed } from '@angular/core/testing';

import { CapituloService } from './capitulo.service';

describe('CapituloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapituloService = TestBed.get(CapituloService);
    expect(service).toBeTruthy();
  });
});
