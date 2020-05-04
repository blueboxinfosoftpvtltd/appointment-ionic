import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewopcodePage } from './addnewopcode.page';

describe('AddnewopcodePage', () => {
  let component: AddnewopcodePage;
  let fixture: ComponentFixture<AddnewopcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewopcodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewopcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
