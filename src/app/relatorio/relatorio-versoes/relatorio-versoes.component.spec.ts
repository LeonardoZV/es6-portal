import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioVersoesComponent } from './relatorio-versoes.component';

describe('RelatorioVersoesComponent', () => {
  let component: RelatorioVersoesComponent;
  let fixture: ComponentFixture<RelatorioVersoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioVersoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioVersoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
