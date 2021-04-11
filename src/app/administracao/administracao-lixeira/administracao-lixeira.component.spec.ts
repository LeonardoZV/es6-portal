import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoLixeiraComponent } from './administracao-lixeira.component';

describe('AdministracaoLixeiraComponent', () => {
  let component: AdministracaoLixeiraComponent;
  let fixture: ComponentFixture<AdministracaoLixeiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracaoLixeiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracaoLixeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
