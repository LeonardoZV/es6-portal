import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloNovoDialogComponent } from './capitulo-novo-dialog.component';

describe('CapituloNovoDialogComponent', () => {
  let component: CapituloNovoDialogComponent;
  let fixture: ComponentFixture<CapituloNovoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloNovoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapituloNovoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
