import { PROJECT } from './types';

// Update Project state
export const setProjectLeft = data => {
  return {
    type: PROJECT.PROJECT_TITLE_LEFT,
    payload: data
  };
};
export const setProjectRight = data => {
  return {
    type: PROJECT.PROJECT_TITLE_RIGHT,
    payload: data
  };
};
export const setProjectBinary = data => {
  return {
    type: PROJECT.PROJECT_TITLE_BINARY,
    payload: data
  };
};
export const setProject = data => {
  return {
    type: PROJECT.PROJECT,
  };
};
