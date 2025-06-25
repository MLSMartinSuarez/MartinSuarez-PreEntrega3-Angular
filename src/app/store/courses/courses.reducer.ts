import { createReducer, on } from '@ngrx/store';
import { loadCourses, addCourse, updateCourse } from './courses.actions';

export interface CoursesState {
  courses: string[];
}

export const initialState: CoursesState = {
  courses: ['Angular', 'React', 'Vue']
};

export const coursesReducer = createReducer(
  initialState,
  
  on(loadCourses, (currentState) => {
    return { ...currentState };
  }),
  
  on(addCourse, (currentState, { course }) => {
    const newCoursesList = [...currentState.courses, course];
    return {
      ...currentState,
      courses: newCoursesList
    };
  }),
  
  on(updateCourse, (currentState, { index, course }) => {
    const updatedCourses = currentState.courses.map((currentCourse, currentIndex) => {
      if (currentIndex === index) {
        return course;
      } else {
        return currentCourse;
      }
    });
    
    return {
      ...currentState,
      courses: updatedCourses
    };
  })
);
