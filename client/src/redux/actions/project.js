import { PROJECT } from './types';

// Update Project state
export const setProjectTitle = data => {
  return {
    type: PROJECT.PROJECT_TITLE,
    payload: data
  };
};
export const setProjectBinary = data => {
  return {
    type: PROJECT.PROJECT_BINARY,
    payload: data
  };
};
export const setProject = () => {
  return {
    type: PROJECT.PROJECT,
  };
};
