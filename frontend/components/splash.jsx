import React from 'react';
import { Link, withRouter } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: '',
      loginPassword: '',
      signupEmail: '',
      signupPassword: '',
      fName: '',
      lName: '',
      dob: '',
      gender: ''
    };
  }

  handleLogin(event) {
    event.preventDefault();
    const loginInfo = {email: this.state.loginEmail,
      password: this.state.loginPassword};
    this.props.login(loginInfo);
  }

  handleChange(field) {
    return (event) => {
      this.setState({[field]: event.currentTarget.value});
    };
  }

  render() {
    return (
      <main>
        <section className="login">
          <i className="logo" />
          <form onSubmit={this.handleLogin} id="login">
            <label htmlFor='loginEmail'>Email</label>
            <input id='loginEmail' onChange={this.handleChange('loginEmail')}/>

            <label htmlFor='loginPassword'>Password</label>
            <input id='loginPassword' onChange={this.handleChange('loginPassword')}/>

          </form>
        </section>
        <section className="signup">
          <section className="features">
          </section>
          <section className="signupform">
          </section>
        </section>
      </main>
    );
  }
}

export default Splash;
