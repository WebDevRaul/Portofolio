import { combineReducers } from 'redux';
import errors from './errors';
import about from './about';
import project from './project';
import email from './email';


export default combineReducers({
  errors,
  about,
  project,
  email
});