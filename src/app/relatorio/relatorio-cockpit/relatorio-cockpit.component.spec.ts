import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioCockpitComponent } from './relatorio-cockpit.component';

describe('RelatorioCockpitComponent', () => {
  let component: RelatorioCockpitComponent;
  let fixture: ComponentFixture<RelatorioCockpitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioCockpitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
