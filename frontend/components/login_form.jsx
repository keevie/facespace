import React from 'react';

const LoginForm = ({errors, handleChange, handleLogin, loginGuest}) => {
  let errorType;
  if (errors.email) {
    errorType = 'email';
  }
  else if (errors.password) {
    errorType = 'password';
  }
  else {
    errorType = null;
  }

  let emailId = 'loginEmail';
  if (errorType === 'email') emailId = 'loginEmail-error';
  let passId = 'loginPassword';
  if (errorType === 'password') passId = 'loginPassword-error';

  const renderError = (type) => {
    if (type === errorType) {
      return (
        <div className="error-alert">
          <i className="fa fa-exclamation-circle" aria-hidden="true" />
          <div className='alert-arrow'>{errors[errorType][0]}</div>
        </div>
      );
    }
  };

  return (
    <section className="login">
      <i className="logo">facespace</i>
      <form onSubmit={handleLogin} id="login">

        <div className='loginbox'>
          <label htmlFor='loginEmail'>Email</label>
          <input id={emailId} onChange={handleChange('loginEmail')}/>
          {renderError('email')}
        </div>

        <div className='loginbox'>
          <label htmlFor='loginPassword'>Password</label>
          <input id={passId}
            type='password'
            onChange={handleChange('loginPassword')}/>
          {renderError('password')}
        </div>

        <button type='submit'>Log In</button>
        <button type='submit'
                onClick={loginGuest}>Guest</button>
      </form>
    </section>
  );
};

export default LoginForm;
