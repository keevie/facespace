import React from 'react';
import { Link, withRouter } from 'react-router';
import BirthdayForm from './birthday_form';

const mapIdToValue = {
  'f_name': 'First Name',
  'l_name': 'Last Name',
  'signupEmail': 'email',
  'emailConfirm': 'Re-enter email',
  'signupPassword': 'New password',
  'gender': 'Gender'
};

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToolTip: false
    };
    this.renderField = this.renderField.bind(this);
    this.renderToolTip = this.renderToolTip.bind(this);
    this.toggleToolTip = this.toggleToolTip.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  toggleToolTip (field, onOrOff) {
    return (event) => {
      event.preventDefault();
      if (onOrOff) {
        this.setState({showToolTip: field});
      }
      else {
        this.setState({showToolTip: false});
      }
    };
  }

  renderToolTip (field) {
    let visible = false;
    if (this.state.showToolTip === field) {
      visible = true;
    }

    let errorContent = null;
    if (field === 'signupEmail') {
      errorContent = this.props.errors['email'];
    }
    else if (field === 'signupPassword'){
      errorContent = this.props.errors['password'];
    }
    else if (field === 'f_name' || field === 'l_name') {
      errorContent = "what's your name?";
    }
    else {
      errorContent = this.props.errors[field];
    }

    let cName = 'alert-arrow-signup';
    if (field === 'f_name') cName = 'alert-arrow-signup-fname';

    if (visible && errorContent) {
      return (
        <div className={cName}>{errorContent}</div>
      );
    }
  }

  renderError (type) {
    let cName='error-alert-signup';
    if (type === 'name') {
      cName = 'error-alert-signup-name';
      if (!(this.props.errors['f_name'] || this.props.errors['l_name'])) {
        type = null;
      }
    }
    if (type === 'dob' && !(this.props.errors[type])) {
      type = null;
    }
    if (type) {
      return (
        <div className={cName}>
          <i className="fa fa-exclamation-circle" aria-hidden="true" />
        </div>
      );
    }
  }

  renderField (field) {
    let errorType = null;
    for (const key of Object.keys(this.props.errors)) {
      if (key === field) {
        errorType = field;
      }
      else if (field === 'signupEmail' && key === 'email') {
        errorType = field;
      }
      else if (field === 'signupPassword' && key === 'password') {
        errorType = field;
      }
    }

    let redBorder = '';
    if (errorType) {
      redBorder = 'redborder';
    }

    return (
      <div className='signup-field'>
        <input id={field}
            className = {redBorder}
            placeholder={mapIdToValue[field]}
            onFocus={this.toggleToolTip(field, true)}
            onBlur={this.toggleToolTip(field, false)}
            onChange={this.props.handleChange({field})}/>
        {field !== 'f_name' && field !== 'l_name' && this.renderError(errorType)}
        {this.renderToolTip(errorType)}
      </div>
     );
  }

  render () {
    return (
    <section className="signupform">
      <form onSubmit={this.props.handleSignup}>
        <h2>Sign Up</h2>
        <h3>It's freeeeeeeee</h3>

        <div id='full-name'>
          {this.renderField('f_name')}
          {this.renderField('l_name')}
          {this.renderError('name')}
        </div>

          {this.renderField('signupEmail')}
          {this.renderField('emailConfirm')}


          {this.renderField('signupPassword')}

        <BirthdayForm handleDateChange={this.props.handleDateChange} />
          {this.renderError('dob')}

          {this.renderField('gender')}

        <button id="signupButton" type='submit'>Create Account</button>
      </form>
    </section>
    );
  }
}

// const SignupForm = ({handleChange, handleDateChange, handleSignup, errors})

export default SignupForm;
