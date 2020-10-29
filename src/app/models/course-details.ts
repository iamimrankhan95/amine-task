export class CourseDetails {
  contents: Contents[];
  descriptions: string;
  enrollInfoes: EnrollInfoes;
  featureReviews: FeaturedReviews[];
  requirements: Requirements[];
  coveredSkills: CoverdSkills[];
  learnings: Learnings[];
  relatedCourse: Course[];
  courseSummary: Course;
}

export class Contents {
  name: string;
  length: string;
  contents: Contents[];
}
export class EnrollInfoes {
  price: number;
  includes: {
    icon: string,
    include: string;
  }[];
}
export class FeaturedReviews {
  image: string;
  profession: string;
  name: string;
  rate: number;
  review: string;
}
export class Requirements {
  name: string;
}
export class CoverdSkills {
  name: string;
}
export class Learnings {
  name: string;
}
export class Course {
  image: string;
  name: string;
  avgRate: number;
  about: string;
  length: string;
  ratingNo: number;
  author: string;
  lastUpdatedOn: string;
  language: string;
  subtitle: string;
}
