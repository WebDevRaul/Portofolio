import { PROJECT } from '../actions/types';

const initialState = {
  title: false,
  binary: false,
};

const project = (state=initialState, action) => {
  switch(action.type) {
    case PROJECT.PROJECT:
      return {
        ...state,
        title: false,
        binary: false
      }
    case PROJECT.PROJECT_TITLE:
      return {
        ...state,
        title: true
      }
    case PROJECT.PROJECT_BINARY:
      return {
        ...state,
        binary: true
      }
    default:
      return state;
  };
};

export default project;