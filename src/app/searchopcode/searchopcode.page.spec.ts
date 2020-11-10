import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchopcodePage } from './searchopcode.page';

describe('SearchopcodePage', () => {
  let component: SearchopcodePage;
  let fixture: ComponentFixture<SearchopcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchopcodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchopcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
