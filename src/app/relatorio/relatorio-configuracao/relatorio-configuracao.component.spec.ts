import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioConfiguracaoComponent } from './relatorio-configuracao.component';

describe('RelatorioConfiguracaoComponent', () => {
  let component: RelatorioConfiguracaoComponent;
  let fixture: ComponentFixture<RelatorioConfiguracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioConfiguracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioConfiguracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
