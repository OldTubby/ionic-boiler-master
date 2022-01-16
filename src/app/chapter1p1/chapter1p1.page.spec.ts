import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter1p1Page } from './chapter1p1.page';

describe('Chapter1p1Page', () => {
  let component: Chapter1p1Page;
  let fixture: ComponentFixture<Chapter1p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter1p1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter1p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
