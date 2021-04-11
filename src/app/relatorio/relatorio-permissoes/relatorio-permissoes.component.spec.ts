import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioPermissoesComponent } from './relatorio-permissoes.component';

describe('RelatorioPermissoesComponent', () => {
  let component: RelatorioPermissoesComponent;
  let fixture: ComponentFixture<RelatorioPermissoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioPermissoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioPermissoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
