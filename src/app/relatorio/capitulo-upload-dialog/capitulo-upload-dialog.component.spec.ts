import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloUploadDialogComponent } from './capitulo-upload-dialog.component';

describe('CapituloUploadDialogComponent', () => {
  let component: CapituloUploadDialogComponent;
  let fixture: ComponentFixture<CapituloUploadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloUploadDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapituloUploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
