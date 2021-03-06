import { DemoNgZorroAntdModule } from './../../ng-zorro-antd.module';
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
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { FormsModule } from '@angular/forms';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
@NgModule({
  imports: [
    CommonModule,
    CoursePreviewRoutingModule,
    MaterialModule,
    DemoNgZorroAntdModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
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
  ],
  providers: [{ provide: NZ_ICONS, useValue: icons } ]
})
export class CoursePreviewModule { }
