import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotabPage } from './rotab.page';

describe('RotabPage', () => {
  let component: RotabPage;
  let fixture: ComponentFixture<RotabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
