import { EMAIL } from '../actions/types';

const initialState = {
  email: '',
  text: ''
};

const email = (state=initialState, action) => {
  switch(action.type) {
    case EMAIL.EMAIL_SEND:
      return {
        ...state,
        email: action.payload.email,
        text: action.payload.textarea
      }
    default:
      return state;
  };
};

export default email;