import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoTemplatesComponent } from './administracao-templates.component';

describe('AdministracaoTemplatesComponent', () => {
  let component: AdministracaoTemplatesComponent;
  let fixture: ComponentFixture<AdministracaoTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracaoTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracaoTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
