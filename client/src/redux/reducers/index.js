import { combineReducers } from 'redux';
import errors from './get_Errors';
import about from './about';
import project from './project';
import email from './email';


export default combineReducers({
  errors,
  about,
  project,
  email
});