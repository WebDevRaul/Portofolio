import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Redux
import { connect } from 'react-redux';
import { setEmail, clearEmail } from '../../redux/actions/email';
import { clearError } from '../../redux/actions/errors';

// Common
import isEmpty from '../../components/common/IsEmpty';

class Form extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      textarea: ''
    };
  };

  componentDidUpdate(prevState, prevProps) {
    const { errors } = this.props.errors;
    const { email } = this.props.email;
    if ((prevProps.errors !== errors) && !isEmpty(errors)) {
      setTimeout(() => this.props.clearError(), 4000);
    };
    if ((prevProps.email !== email) && email) {
      setTimeout(() => this.props.clearEmail(), 4000);
    };
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, textarea } = this.state;
    const data = { email, textarea };
    this.props.setEmail(data);
    this.setState({ email: '', textarea: '' });
  };
  render() {
    const email_prop = this.props.email.email;
    const { email, textarea } = this.state;
    const { errors } = this.props.errors;
    return (
      <form className='footer-form ml-2 mt-3'>
        <div className='row no-gutters'>
          <div className='col-10 col-sm-11 col-md-8 col-lg-6 m-auto'>
            <h5 className='mb-3 text-center request'>Need a website? Let's get in touch!</h5>
          </div>
        </div>
        <div className="row no-gutters mb-3">
          <div className='col-10 col-sm-11 col-md-8 col-lg-6 m-auto'>
            <input 
              type="email" 
              className={classnames('form-control form-control-sm', {'is-invalid': errors.email})}  
              placeholder="Email"
              name='email'
              value={email}
              onChange={this.onChange}
             />
             {errors.email && <div className='invalid-feedback text-center font-weight-bold'><h5>{errors.email}</h5></div>}
             <div className={classnames('valid-feedback text-center', { 'hide': !email_prop })}><h5>E-mail send successfully.</h5></div>
          </div>
        </div>
        <div className="row no-gutters mb-3">
          <div className='col-10 col-sm-11 col-md-8 col-lg-6 m-auto'>
            <textarea 
              className={classnames('form-control', {'is-invalid': errors.textarea})} 
              rows="5"
              name='textarea'
              value={textarea}
              onChange={this.onChange}
            ></textarea>
            {errors.textarea && <div className='invalid-feedback text-center font-weight-bold'><h5>{errors.textarea}</h5></div>}
          </div>
        </div>
        <div className="row no-gutters mb-3">
          <div className='col-10 col-sm-11 col-md-8 col-lg-6 m-auto'>
          <button onClick={this.onSubmit} className='btn btn-primary float-right'>Send</button>
          </div>
        </div>
      </form>
    );
  };
};

Form.propTypes = {
  setEmail: PropTypes.func.isRequired,
  clearEmail: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  email: state.email
});

export default connect(mapStateToProps, { setEmail, clearError, clearEmail })(Form)