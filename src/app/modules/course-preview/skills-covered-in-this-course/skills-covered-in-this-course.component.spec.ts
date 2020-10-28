/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SkillsCoveredInThisCourseComponent } from './skills-covered-in-this-course.component';

describe('SkillsCoveredInThisCourseComponent', () => {
  let component: SkillsCoveredInThisCourseComponent;
  let fixture: ComponentFixture<SkillsCoveredInThisCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCoveredInThisCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCoveredInThisCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
