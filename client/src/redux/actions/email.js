import { EMAIL } from './types';

export const setEmail = data => {
  return {
    type: EMAIL.EMAIL_SEND,
    payload: data
  };
};