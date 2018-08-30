import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnePage } from './child-one.page';

describe('ChildOnePage', () => {
  let component: ChildOnePage;
  let fixture: ComponentFixture<ChildOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
