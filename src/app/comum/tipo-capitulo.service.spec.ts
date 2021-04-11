import { TestBed } from '@angular/core/testing';

import { TipoCapituloService } from './tipo-capitulo.service';

describe('TipoCapituloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoCapituloService = TestBed.get(TipoCapituloService);
    expect(service).toBeTruthy();
  });
});
