import { EMAIL } from '../actions/types';

const initialState = {
  email: false
};

const email = (state=initialState, action) => {
  switch(action.type) {
    case EMAIL.EMAIL_SEND:
      return {
        ...state,
        email: action.payload
      }
    case EMAIL.CLEAR_EMAIL:
      return {
        ...state,
        email: false
      }
    default:
      return state;
  };
};

export default email;