const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateSendEmail(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email: '';
  data.textarea = !isEmpty(data.textarea) ? data.textarea: '';

  // Validate email
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  // Validate text
  if (!Validator.isLength(data.textarea, {min: 1, max: 1000})) {
    errors.textarea = 'Textarea is to long (max 1000 Characters)'
  }

  // Validate for empty
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  
  if (Validator.isEmpty(data.textarea)) {
    errors.textarea = 'Textarea field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};