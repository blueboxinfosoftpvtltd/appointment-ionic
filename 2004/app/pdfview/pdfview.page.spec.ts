import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfviewPage } from './pdfview.page';

describe('PdfviewPage', () => {
  let component: PdfviewPage;
  let fixture: ComponentFixture<PdfviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
