import React from 'react';
import { Link, withRouter } from 'react-router';
import BirthdayForm from './birthday_form';


const SignupForm = ({handleChange, handleDateChange, handleSignup}) => {
  return (
    <section className="signupform">
      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <h3>It's freeeeeeeee</h3>

        <input id='f_name'
          placeholder="First Name"
          onChange={handleChange('f_name')}/>

        <input id='l_name'
          placeholder="Last Name"
          onChange={handleChange('l_name')}/>

        <input id='signupEmail'
          placeholder="email"
          onChange={handleChange('signupEmail')}/>

        <input id='emailConfirm'
          placeholder="Re-enter email"
          onChange={handleChange('emailConfirm')}/>

        <input id='signupPassword'
          placeholder="New password"
          type='password'
          onChange={handleChange('signupPassword')}/>

        <BirthdayForm handleDateChange={handleDateChange} />

        <input id='gender'
          placeholder="Gender"
          onChange={handleChange('gender')}/>

        <button id="signupButton" type='submit'>Create Account</button>
      </form>
    </section>
  );
};

export default SignupForm;
