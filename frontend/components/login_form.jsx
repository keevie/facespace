import React from 'react';

const LoginForm = ({handleChange, handleLogin, loginGuest}) => {
  return (
    <section className="login">
      <i className="logo">facespace</i>
      <form onSubmit={handleLogin} id="login">
        <label htmlFor='loginEmail'>Email</label>
        <input id='loginEmail' onChange={handleChange('loginEmail')}/>

        <label htmlFor='loginPassword'>Password</label>
        <input id='loginPassword'
          type='password'
          onChange={handleChange('loginPassword')}/>
        <button id="loginbutton" type='submit'>Log In</button>
        <button type='submit'
                onClick={loginGuest}>Guest</button>
      </form>
    </section>
  );
};

export default LoginForm;
