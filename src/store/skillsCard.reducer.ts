import { createAction, createFeatureSelector, createReducer, on, props, Store } from '@ngrx/store';
import { mockData } from './mockData';
import { Skills, SkillsCategory } from './types';

export const initialState = mockData.skills;

export const selectSkills = createFeatureSelector<{
  allIds: number[];
  byId: {
    [key: number]: Skills;
  };
  categories: {
    allIds: number[];
    byId: {
      [key: number]: SkillsCategory;
    };
  }
}>('skills');

export const addSkill = createAction(
  '[Skills] Add Skill',
  props<{ newSkill: Skills }>()
);

export const skillsCardReducer = createReducer(
  initialState,
  on(addSkill,(state, {newSkill}) => {
    return{
      ...state,
      byId:{
        ...state.byId,
        [newSkill.id]:newSkill
      }
    }
  })
);
