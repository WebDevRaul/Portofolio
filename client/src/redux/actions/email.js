import axios from 'axios';
import { EMAIL, ERRORS } from './types';
import { BACKEND } from '../../config/backend';


export const setEmail = data => dispatch => {
  axios
    .post(`${BACKEND.USER}/send-email`, data)
    .then(res => dispatch({
      type: EMAIL.EMAIL_SEND,
      payload: data
    }))
    .catch(err => dispatch({
      type: ERRORS.ERROR,
      payload: err.response.data
    }));
};