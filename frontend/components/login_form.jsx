import React from 'react';


class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showEmailToolTip: false,
      showPassToolTip: false
    };
    this.renderEmail = this.renderEmail.bind(this);
    this.renderPass = this.renderPass.bind(this);
    this.toggleToolTip = this.toggleToolTip.bind(this);
  }


  toggleToolTip (field, onOrOff) {
    return (event) => {
      event.preventDefault();
      if (field === 'email') {
        this.setState({showEmailToolTip: onOrOff});
      }
      else if (field === 'password') {
        this.setState({showPassToolTip: onOrOff});
      }
    };
  }

  renderToolTip (type) {
    let visible = false;
    if (type === 'email' && this.state.showEmailToolTip) {
      visible = true;
    }
    if (type === 'password' && this.state.showPassToolTip) {
      visible = true;
    }
    let errorContent = null;
    if (type === 'email') errorContent = this.props.emailErrors;
    if (type === 'password') errorContent = this.props.passErrors;

    if (visible && errorContent) {
      return (
        <div className='alert-arrow'>{errorContent}</div>
      );
    }
  }

  renderError (type) {
    if (type) {
      return (
        <div className="error-alert">
          <i className="fa fa-exclamation-circle" aria-hidden="true" />
        </div>
      );
    }
  }


  renderEmail (){
    let errorType = null;
    let emailId = 'loginEmail';
    if (this.props.emailErrors) {
      errorType = 'email';
      emailId = 'loginEmail-error';
    }
    return (
      <div className='loginbox'>
        <label htmlFor='loginEmail'>Email</label>
        <input id={emailId}
          onFocus={this.toggleToolTip('email', true)}
          onBlur={this.toggleToolTip('email', false)}
          onChange={this.props.handleChange('loginEmail')}/>
        {this.renderToolTip('email')}
        {this.renderError(errorType)}
      </div>
    );
  }

  renderPass (){
    let errorType = null;
    let passId = 'loginPassword';
    if (this.props.passErrors) {
      errorType = 'password';
      passId = 'loginPassword-error';
    }
    return (
      <div className='loginbox'>
        <label htmlFor='loginPassword'>Password</label>
        <input id={passId}
          type='password'
          onFocus={this.toggleToolTip('password', true)}
          onBlur={this.toggleToolTip('password', false)}
          onChange={this.props.handleChange('loginPassword')}/>
        {this.renderError(errorType)}
        {this.renderToolTip('password')}
      </div>
    );

  }

  render () {
    return (
      <section className="login">
        <i className="logo">facespace</i>
        <form onSubmit={this.props.handleLogin} id="login">

          {this.renderEmail()}
          {this.renderPass()}

          <button type='submit'>Log In</button>
          <button type='submit'
                  onClick={this.props.loginGuest}>Guest</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;
