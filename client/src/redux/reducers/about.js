import { ABOUT } from '../actions/types';

const initialState = {
  title: false,
  about_me_p1: false,
  about_me_p2: false,
  about_me_p3: false,
  skills: false,
  more_skills: false,
};

const about = (state=initialState, action) => {
  switch(action.type) {
    case ABOUT.ABOUT_TITLE:
      return {
        ...state,
        title: action.payload
      }
    case ABOUT.ABOUT_ME_P1:
      return {
        ...state,
        about_me_p1: action.payload
      }
    case ABOUT.ABOUT_ME_P2:
      return {
        ...state,
        about_me_p2: action.payload
      }
    case ABOUT.ABOUT_ME_P3:
      return {
        ...state,
        about_me_p3: action.payload
      }
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