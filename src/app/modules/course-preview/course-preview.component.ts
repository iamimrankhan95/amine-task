import { Component, OnInit } from '@angular/core';
import { CourseDetails } from 'src/app/models/course-details';

@Component({
  selector: 'app-course-preview',
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.scss']
})
export class CoursePreviewComponent implements OnInit {

  courseDetails: CourseDetails;
  panelOpenState = true;
  constructor() {
    this.courseDetails = new CourseDetails();
    this.courseDetails.contents = [
      {
        name: 'Welcome and Introduction', length: '45:52', contents: [
          { name: 'Course Welcome', length: '45:52', contents: [] }
        ]
      }
    ];
    this.courseDetails.enrollInfoes = {
      price: 770, includes: [
        { icon: 'fas fa-address-book', include: ' 40.5 hours on-demand video' },
        { icon: 'fas fa-address-book', include: ' 499 downloadable resources' },
        { icon: 'fas fa-address-book', include: ' Access on mobile and TV' }
      ]
    };
    this.courseDetails.descriptions = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    this.courseDetails.featureReviews = [{
      image: 'assets/img/image20.png',
      name: 'Maria Rhiel Madsen',
      profession: 'Web Developer',
      rate: 3,
      review: 'It is really amazing course. Before l started this course, l have not known so much thing about project management, but now, l m learning a lot willingly, instructor is really good at this job. So l m so happy and lucky to take this course for my career.'
    }, {
      image: 'assets/img/image 21.png',
      name: 'Angelina',
      profession: 'Web Developer',
      rate: 4,
      review: 'It is really amazing course. Before l started this course, l have not known so much thing about project management, but now, l m learning a lot willingly, instructor is really good at this job. So l m so happy and lucky to take this course for my career.'
    }];
    this.courseDetails.requirements = [{ name: 'asdf' }, { name: 'asddfg' }, { name: 'asddfg' }, { name: 'asddfg' }];
    this.courseDetails.coveredSkills = [{ name: 'asdf' }, { name: 'asddfg' }, { name: 'asddfg' }, { name: 'asddfg' }];
    this.courseDetails.relatedCourse = [{
      image: 'assets/img/Rectangle 302.png',
      name: 'An Entire MBA in 1 Course:Award Winning Business School Prof',
      avgRate: 3,
      about: ''
    }, {
      image: 'assets/img/image 21.png',
      name: 'Angelina',
      avgRate: 4,
      about: ''
    }];
    this.courseDetails.learnings = [{ name: 'asdf' }, { name: 'asddfg' }, { name: 'asddfg' }, { name: 'asddfg' }];
    this.courseDetails.courseSummary = {
      avgRate: 4,
      image: '',
      name: 'Begining Project Managment: Project Managment Level One',
      about: 'Everything you need to know about starting, Growing and Perfecting youtube channel'
    }
  }

  ngOnInit() {
  }

}
