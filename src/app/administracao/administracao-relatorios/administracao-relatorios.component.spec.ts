import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoRelatoriosComponent } from './administracao-relatorios.component';

describe('AdministracaoRelatoriosComponent', () => {
  let component: AdministracaoRelatoriosComponent;
  let fixture: ComponentFixture<AdministracaoRelatoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracaoRelatoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracaoRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
