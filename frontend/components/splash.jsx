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
      emailConfirm: '',
      f_name: '',
      l_name: '',
      dob: '',
      month: 0,
      day: 0,
      year: 0,
      gender: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
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

  handleSignup(event) {
    event.preventDefault();
    const signupInfo = {
      email: this.state.signupEmail,
      password: this.state.signupPassword,
      f_name: this.state.f_name
    };
  }

  dayOptions() {
    const days = ["Day"];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days.map((day, i) => (
      <option key={i} value={day}>{day}</option>
    ));
  }

  monthOptions() {
    const months = [
      'Month',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    return months.map((month, i) => (
      <option key={i} value={month}>{month}</option>
    ));

  }

  yearOptions() {
    const years = ['Year'];
    for (let i = 1905; i <= 2017; i++) {
      years.push(i);
    }
    return years.map((year, i) => (
      <option key={i} value={year}>{year}</option>
    ));
  }


  render() {
    return (
      <main>
        <section className="login">
          <i className="logo">facespace</i>
          <form onSubmit={this.handleLogin} id="login">
            <label htmlFor='loginEmail'>Email</label>
            <input id='loginEmail' onChange={this.handleChange('loginEmail')}/>

            <label htmlFor='loginPassword'>Password</label>
            <input id='loginPassword'
              type='password'
              onChange={this.handleChange('loginPassword')}/>
            <button id="loginbutton" type='submit'>Log In</button>
          </form>
        </section>
        <section className="signup">
          <section className="features">
          </section>
          <section className="signupform">
            <form>
              <h2>Sign Up</h2>
              <h3>It's freeeeeeeee</h3>

              <input id='f_name'
                placeholder="First Name"
                onChange={this.handleChange('f_name')}/>

              <input id='l_name'
                placeholder="Last Name"
                onChange={this.handleChange('l_name')}/>

              <input id='signupEmail'
                placeholder="email"
                onChange={this.handleChange('signupEmail')}/>

              <input id='emailConfirm'
                placeholder="Re-enter email"
                onChange={this.handleChange('emailConfirm')}/>

              <input id='signupPassword'
                placeholder="New password"
                type='password'
                onChange={this.handleChange('signupPassword')}/>

              <label htmlFor='birthday'>Birthday</label>

              <select onChange={this.handleDateChange('month')}>
                {this.monthOptions()}
              </select>
              <select onChange={this.handleDateChange('day')}>
                {this.dayOptions()}
              </select>
              <select onChange={this.handleDateChange('year')}>
                {this.yearOptions()}
              </select>

              <input id='gender'
                placeholder="Gender"
                onChange={this.handleChange('gender')}/>

              <button id="signupButton" type='submit'>Create Account</button>
            </form>
          </section>
        </section>
      </main>
    );
  }
}

export default Splash;
