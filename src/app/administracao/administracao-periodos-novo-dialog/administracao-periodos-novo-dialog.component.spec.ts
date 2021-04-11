import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoPeriodosNovoDialogComponent } from './administracao-periodos-novo-dialog.component';

describe('AdministracaoPeriodosNovoDialogComponent', () => {
  let component: AdministracaoPeriodosNovoDialogComponent;
  let fixture: ComponentFixture<AdministracaoPeriodosNovoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracaoPeriodosNovoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracaoPeriodosNovoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
