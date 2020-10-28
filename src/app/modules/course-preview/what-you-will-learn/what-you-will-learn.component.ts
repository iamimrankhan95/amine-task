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
  constructor() { }

  ngOnInit() {
  }

}
