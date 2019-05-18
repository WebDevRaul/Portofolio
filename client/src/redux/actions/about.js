import { ABOUT } from './types';

// Update Title state
export const setMoreSkills = data => {
  return {
    type: ABOUT.MORE_SKILLS,
    payload: data
  };
};
export const setSkills = data => {
  return {
    type: ABOUT.SKILLS,
    payload: data
  };
};