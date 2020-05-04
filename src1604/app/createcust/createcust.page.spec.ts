import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecustPage } from './createcust.page';

describe('CreatecustPage', () => {
  let component: CreatecustPage;
  let fixture: ComponentFixture<CreatecustPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecustPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
