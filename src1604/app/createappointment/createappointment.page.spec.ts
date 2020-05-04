import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateappointmentPage } from './createappointment.page';

describe('CreateappointmentPage', () => {
  let component: CreateappointmentPage;
  let fixture: ComponentFixture<CreateappointmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateappointmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateappointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
