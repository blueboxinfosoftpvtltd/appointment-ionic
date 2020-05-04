import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayvideoPage } from './playvideo.page';

describe('PlayvideoPage', () => {
  let component: PlayvideoPage;
  let fixture: ComponentFixture<PlayvideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayvideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayvideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
