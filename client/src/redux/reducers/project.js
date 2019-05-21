import { PROJECT } from '../actions/types';

const initialState = {
  title_left: false,
  title_right: false,
  title_binary: false,
};

const project = (state=initialState, action) => {
  switch(action.type) {
    case PROJECT.PROJECT:
      return {
        ...state,
        title_left: false,
        title_right: false,
        title_binary: false
      }
    case PROJECT.PROJECT_TITLE_LEFT:
      return {
        ...state,
        title_left: true
      }
    case PROJECT.PROJECT_TITLE_RIGHT:
      return {
        ...state,
        title_right: true
      }
    case PROJECT.PROJECT_TITLE_BINARY:
      return {
        ...state,
        title_binary: true
      }
    default:
      return state;
  };
};

export default project;