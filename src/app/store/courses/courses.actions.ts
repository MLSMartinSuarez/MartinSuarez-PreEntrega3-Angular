import { createAction, props } from '@ngrx/store';

export const loadCourses = createAction('[Courses] Load Courses');

export const addCourse = createAction(
  '[Courses] Add Course',
  props<{ course: string }>()
);

export const updateCourse = createAction(
  '[Courses] Update Course',
  props<{ index: number; course: string }>()
);
