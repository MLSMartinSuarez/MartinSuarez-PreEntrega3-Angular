import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: string[] = ['Angular', 'React', 'Vue'];

  getCourses(): string[] {
    return this.courses;
  }

  addCourse(course: string): void {
    this.courses = [...this.courses, course];
  }

  updateCourse(index: number, course: string): void {
    this.courses[index] = course;
  }
}