import { ABOUT } from '../actions/types';

const initialState = {
  skills: false,
  more_skills: false,
};

const about = (state=initialState, action) => {
  switch(action.type) {
    case ABOUT.SKILLS:
      return {
        ...state,
        skills: action.payload
      }
    case ABOUT.MORE_SKILLS:
      return {
        ...state,
        more_skills: action.payload
      }
    default:
      return state;
  };
};

export default about;