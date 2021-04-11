import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioGerarDialogComponent } from './relatorio-gerar-dialog.component';

describe('RelatorioGerarDialogComponent', () => {
  let component: RelatorioGerarDialogComponent;
  let fixture: ComponentFixture<RelatorioGerarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioGerarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioGerarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
