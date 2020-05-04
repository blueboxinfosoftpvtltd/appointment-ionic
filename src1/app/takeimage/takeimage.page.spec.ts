import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeimagePage } from './takeimage.page';

describe('TakeimagePage', () => {
  let component: TakeimagePage;
  let fixture: ComponentFixture<TakeimagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeimagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
