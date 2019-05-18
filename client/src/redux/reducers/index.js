import { combineReducers } from 'redux';
import errors from './get_Errors';
import about from './about';


export default combineReducers({
  errors,
  about
});