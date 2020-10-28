import { Component, Input, OnInit } from '@angular/core';
import { FeaturedReviews } from 'src/app/models/course-details';

@Component({
  selector: 'app-featured-review',
  templateUrl: './featured-review.component.html',
  styleUrls: ['./featured-review.component.scss']
})
export class FeaturedReviewComponent implements OnInit {

  @Input() featureReviews: FeaturedReviews[];
  panelOpenState = true;
  constructor() { }

  ngOnInit() {
  }

}
