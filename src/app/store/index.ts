import { ActionReducerMap } from "@ngrx/store";
import { coursesReducer, CoursesState } from "./courses/courses.reducer";

interface AppState {
    courses: CoursesState;
}

export const appReducer : ActionReducerMap<AppState> = {
    courses: coursesReducer
};