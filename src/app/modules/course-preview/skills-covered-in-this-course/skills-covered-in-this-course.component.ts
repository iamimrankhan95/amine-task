import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CoverdSkills } from 'src/app/models/course-details';
export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-skills-covered-in-this-course',
  templateUrl: './skills-covered-in-this-course.component.html',
  styleUrls: ['./skills-covered-in-this-course.component.scss']
})
export class SkillsCoveredInThisCourseComponent implements OnInit {

  panelOpenState = false;
  constructor() { }
  @Input() coveredSkills: CoverdSkills[];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.coveredSkills, event.previousIndex, event.currentIndex);
  }
  ngOnInit() {
  }

}
