import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  
  selectedCourse : Course;
  courses : Course[];

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.getCourses();
  }

  onSelect(course: Course) : void {
    this.selectedCourse = course;
  }

  getCourses() : void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

}