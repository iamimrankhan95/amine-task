/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhatYouWillLearnComponent } from './what-you-will-learn.component';

describe('WhatYouWillLearnComponent', () => {
  let component: WhatYouWillLearnComponent;
  let fixture: ComponentFixture<WhatYouWillLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatYouWillLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatYouWillLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
