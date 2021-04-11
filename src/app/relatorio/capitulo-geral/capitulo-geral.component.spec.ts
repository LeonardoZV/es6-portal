import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloGeralComponent } from './capitulo-geral.component';

describe('CapituloGeralComponent', () => {
  let component: CapituloGeralComponent;
  let fixture: ComponentFixture<CapituloGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapituloGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
