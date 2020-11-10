import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RohistorypdfPage } from './rohistorypdf.page';

describe('RohistorypdfPage', () => {
  let component: RohistorypdfPage;
  let fixture: ComponentFixture<RohistorypdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RohistorypdfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RohistorypdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
