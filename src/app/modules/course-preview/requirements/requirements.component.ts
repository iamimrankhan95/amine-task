import { Component, Input, OnInit } from '@angular/core';
import { Requirements } from 'src/app/models/course-details';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit {

  @Input() requirements: Requirements[];
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
