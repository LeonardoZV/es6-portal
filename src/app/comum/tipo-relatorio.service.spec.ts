import { TestBed } from '@angular/core/testing';

import { TipoRelatorioService } from './tipo-relatorio.service';

describe('TipoRelatorioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoRelatorioService = TestBed.get(TipoRelatorioService);
    expect(service).toBeTruthy();
  });
});
