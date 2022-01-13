import { createReducer, on } from '@ngrx/store';
import { mockData } from './mockData';

export const initialState = mockData.comments;

export const comentCardReducer = createReducer(
  initialState,
);
