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
export const setAboutMeP1 = data => {
  return {
    type: ABOUT.ABOUT_ME_P1,
    payload: data
  };
};
export const setAboutMeP2 = data => {
  return {
    type: ABOUT.ABOUT_ME_P2,
    payload: data
  };
};
export const setAboutMeP3 = data => {
  return {
    type: ABOUT.ABOUT_ME_P3,
    payload: data
  };
};