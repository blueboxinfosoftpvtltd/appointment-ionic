import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchappoinmentPage } from './searchappoinment.page';

describe('SearchappoinmentPage', () => {
  let component: SearchappoinmentPage;
  let fixture: ComponentFixture<SearchappoinmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchappoinmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchappoinmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
