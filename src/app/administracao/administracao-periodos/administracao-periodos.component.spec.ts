import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoPeriodosComponent } from './administracao-periodos.component';

describe('AdministracaoPeriodosComponent', () => {
  let component: AdministracaoPeriodosComponent;
  let fixture: ComponentFixture<AdministracaoPeriodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracaoPeriodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracaoPeriodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
