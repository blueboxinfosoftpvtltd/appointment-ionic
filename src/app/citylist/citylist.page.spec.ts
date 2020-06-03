import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitylistPage } from './citylist.page';

describe('CitylistPage', () => {
  let component: CitylistPage;
  let fixture: ComponentFixture<CitylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitylistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
