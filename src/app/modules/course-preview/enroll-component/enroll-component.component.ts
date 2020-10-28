import { EnrollInfoes } from './../../../models/course-details';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enroll-component',
  templateUrl: './enroll-component.component.html',
  styleUrls: ['./enroll-component.component.scss']
})
export class EnrollComponentComponent implements OnInit {

  @Input() enrollInfoes: EnrollInfoes;
  constructor() { }

  ngOnInit() {
  }

}
