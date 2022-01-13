import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { mockData } from './mockData';
import { Student } from './types';

export const initialState = mockData.students;

export const selectStudents = createFeatureSelector<{
  allIds: number[];
  byId: {
    [key: number]: Student;
  };
}>('students');

export const studentCardReducer = createReducer(initialState);
