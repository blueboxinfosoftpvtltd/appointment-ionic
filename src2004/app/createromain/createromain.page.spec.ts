import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateromainPage } from './createromain.page';

describe('CreateromainPage', () => {
  let component: CreateromainPage;
  let fixture: ComponentFixture<CreateromainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateromainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateromainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
