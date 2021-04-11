import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloVersoesComponent } from './capitulo-versoes.component';

describe('CapituloVersoesComponent', () => {
  let component: CapituloVersoesComponent;
  let fixture: ComponentFixture<CapituloVersoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloVersoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapituloVersoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
