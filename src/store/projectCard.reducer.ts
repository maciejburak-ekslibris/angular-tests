import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { mockData } from './mockData';
import { Project } from './types';

export const initialState = mockData.projects;

export const selectProjects = createFeatureSelector<{
  allIds: number[];
  byId: {
    [key: number]: Project;
  };
  statuses: {id:number, name:string}[]
}>('projects');

export const projectCardReducer = createReducer(
  initialState,
);
