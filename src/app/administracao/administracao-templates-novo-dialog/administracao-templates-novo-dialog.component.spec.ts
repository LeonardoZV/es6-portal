import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoTemplatesNovoDialogComponent } from './administracao-templates-novo-dialog.component';

describe('AdministracaoTemplatesNovoDialogComponent', () => {
  let component: AdministracaoTemplatesNovoDialogComponent;
  let fixture: ComponentFixture<AdministracaoTemplatesNovoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracaoTemplatesNovoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracaoTemplatesNovoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
