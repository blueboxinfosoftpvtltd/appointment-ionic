import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateroPage } from './createro.page';

describe('CreateroPage', () => {
  let component: CreateroPage;
  let fixture: ComponentFixture<CreateroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
