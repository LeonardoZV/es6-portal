import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoRelatoriosNovoDialogComponent } from './administracao-relatorios-novo-dialog.component';

describe('AdministracaoRelatoriosNovoDialogComponent', () => {
  let component: AdministracaoRelatoriosNovoDialogComponent;
  let fixture: ComponentFixture<AdministracaoRelatoriosNovoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracaoRelatoriosNovoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracaoRelatoriosNovoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
