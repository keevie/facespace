import React from 'react';
import { Link, withRouter } from 'react-router';
import SignupForm from './signup_form';
import LoginForm from './login_form';
import FeatureList from './feature_list';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: '',
      loginPassword: '',
      signupEmail: '',
      signupPassword: '',
      emailConfirm: '',
      f_name: '',
      l_name: '',
      dob: '',
      month: 'Month',
      day: 'Day',
      year: 'Year',
      gender: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  validDate(field, value) {
    //todo: actually validate this stuff!
    switch(field){
      case 'month':
        return true;
      case 'day':
        return true;
      case 'year':
        return true;
    }
  }

  updateDateString() {
    const monthMap = {
      'Jan': 1,
      'Feb': 2,
      'Mar': 3,
      'Apr': 4,
      'May': 5,
      'Jun': 6,
      'Jul': 7,
      'Aug': 8,
      'Sep': 9,
      'Oct': 10,
      'Nov': 11,
      'Dec': 12
    };
    if (this.state.month !=='Month'
      && this.state.day !=='Day'
      && this.state.year !=='Year') {
      const month = monthMap[this.state.month];
      const dateString = `${this.state.year}-${month}-${this.state.day}`;
      this.setState({dob: dateString});
    }
  }

  handleDateChange(field) {
    return (e) => {
      if (this.validDate(field, e.currentTarget.value)) {
        this.setState({ [field]: e.currentTarget.value}, this.updateDateString);
      }
      //else render errors
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

  loginGuest(event) {
    event.preventDefault();
    const guestLogin = {
      email: 'guest@guest.com',
      password: 'password'
    };
    this.props.login(guestLogin);
  }

  handleSignup(event) {
    event.preventDefault();
    const signupInfo = {
      email: this.state.signupEmail,
      password: this.state.signupPassword,
      f_name: this.state.f_name,
      l_name: this.state.f_name,
      dob: this.state.dob
    };
    this.props.signup(signupInfo);
  }


  render() {
    return (
      <main>
        <LoginForm handleChange={this.handleChange}
                   emailErrors={this.props.errors.loginEmail}
                   passErrors={this.props.errors.loginPassword}
                   loginGuest={this.loginGuest}
                   handleLogin={this.handleLogin} />
        <section className='main-area'>
        <FeatureList />
        <SignupForm handleChange={this.handleChange}
                    handleDateChange={this.handleDateChange}
                    handleSignup={this.handleSignup}
                    errors={this.props.errors} />
        </section>
      </main>
    );
  }
}

export default Splash;
