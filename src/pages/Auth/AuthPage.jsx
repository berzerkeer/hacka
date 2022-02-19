import React from 'react';
import './auth.scss';

function AuthPage({ children }) {
  return (
    <div className="two_column flex">
      <div className="auth__container flex flex-ai-c flex-jc-c">{children}</div>
      <div className="login__hero flex flex-ai-c flex-jc-c">
        <h1>berzerk.</h1>
      </div>
    </div>
  );
}

export default AuthPage;
