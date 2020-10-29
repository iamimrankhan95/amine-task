import { Component, Input, OnInit } from '@angular/core';
import { Learnings } from 'src/app/models/course-details';

@Component({
  selector: 'app-what-you-will-learn',
  templateUrl: './what-you-will-learn.component.html',
  styleUrls: ['./what-you-will-learn.component.scss']
})
export class WhatYouWillLearnComponent implements OnInit {

  @Input() learnings: Learnings[];
  panelOpenState = true;
  panels = [
    {
      active: false,
      disabled: false,
      icon: 'double-right',
      name: 'What you will learn',
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px'
      }
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
