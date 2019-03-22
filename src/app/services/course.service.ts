import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Course } from '../course';
import { COURSES } from '../mock-courses';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class CourseService {

  constructor(private messageService: MessageService) { }

  getCourse(id: number): Observable<Course> {
    // TODO: send the message _after_ fetching the course
    this.messageService.add('CourseService: fetched course id=${id}');
    return of(COURSES.find(course => course.id === id));
  }

  getCourses(): Observable<Course[]> {
    // TODO: send the message _after_ fetching the courses
    this.messageService.add('CourseService: fetched courses');
    return of(COURSES);
  }
}