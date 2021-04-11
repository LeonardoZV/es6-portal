import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioTemplatesComponent } from './relatorio-templates.component';

describe('RelatorioTemplatesComponent', () => {
  let component: RelatorioTemplatesComponent;
  let fixture: ComponentFixture<RelatorioTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
