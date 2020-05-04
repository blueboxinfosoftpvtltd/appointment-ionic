import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightimagePage } from './highlightimage.page';

describe('HighlightimagePage', () => {
  let component: HighlightimagePage;
  let fixture: ComponentFixture<HighlightimagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightimagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
