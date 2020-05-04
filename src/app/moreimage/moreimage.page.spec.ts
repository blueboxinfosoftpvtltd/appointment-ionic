import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreimagePage } from './moreimage.page';

describe('MoreimagePage', () => {
  let component: MoreimagePage;
  let fixture: ComponentFixture<MoreimagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreimagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
