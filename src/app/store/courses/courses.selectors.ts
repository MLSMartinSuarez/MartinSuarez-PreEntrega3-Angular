import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CoursesState } from './courses.reducer';

export const selectCoursesState = createFeatureSelector<CoursesState>('courses');

export const selectAvailableCourses = createSelector(
  selectCoursesState,
  (coursesState: CoursesState) => coursesState.courses
);
