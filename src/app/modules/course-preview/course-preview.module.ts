import { MaterialModule } from './../../material.module';
import { CoursePreviewRoutingModule } from './course-preview-routing.module';
import { WhatYouWillLearnComponent } from './what-you-will-learn/what-you-will-learn.component';
import { StudentsAlsoBoughtComponent } from './students-also-bought/students-also-bought.component';
import { SkillsCoveredInThisCourseComponent } from './skills-covered-in-this-course/skills-covered-in-this-course.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { EnrollComponentComponent } from './enroll-component/enroll-component.component';
import { FeaturedReviewComponent } from './featured-review/featured-review.component';
import { DescriptionComponent } from './description/description.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePreviewComponent } from './course-preview.component';

@NgModule({
  imports: [
    CommonModule,
    CoursePreviewRoutingModule,
    MaterialModule
  ],
  declarations: [
    CoursePreviewComponent,
    CourseContentComponent,
    DescriptionComponent,
    EnrollComponentComponent,
    FeaturedReviewComponent,
    RequirementsComponent,
    SkillsCoveredInThisCourseComponent,
    StudentsAlsoBoughtComponent,
    WhatYouWillLearnComponent
  ]
})
export class CoursePreviewModule { }
