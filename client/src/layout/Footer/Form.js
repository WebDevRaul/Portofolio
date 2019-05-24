import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { setEmail } from '../../redux/actions/email';

class Form extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      textarea: ''
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
    const { email, textarea } = this.state;
    return (
      <form className='footer-form'>
        <div className="row no-gutters mb-3">
          <div className='col-10 col-sm-11 col-md-8 col-lg-6 m-auto'>
            <input 
              type="email" className="form-control form-control-sm"  
              placeholder="Email"
              name='email'
              value={email}
              onChange={this.onChange}
             />
          </div>
        </div>
        <div className="row no-gutters mb-3">
          <div className='col-10 col-sm-11 col-md-8 col-lg-6 m-auto'>
            <textarea 
              className="form-control" 
              rows="5"
              name='textarea'
              value={textarea}
              onChange={this.onChange}
            ></textarea>
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
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { setEmail })(Form)