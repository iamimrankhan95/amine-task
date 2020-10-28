import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course-details';

@Component({
  selector: 'app-students-also-bought',
  templateUrl: './students-also-bought.component.html',
  styleUrls: ['./students-also-bought.component.scss']
})
export class StudentsAlsoBoughtComponent implements OnInit {

  @Input() relatedCourse: Course[];
  panelOpenState = true;
  constructor() { }

  ngOnInit() {
  }

}
