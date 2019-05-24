import { EMAIL } from '../actions/types';

const initialState = {
  email: '',
};

const email = (state=initialState, action) => {
  switch(action.type) {
    case EMAIL.EMAIL_SEND:
      return {
        ...state,
        email: action.payload
      }
    default:
      return state;
  };
};

export default email;