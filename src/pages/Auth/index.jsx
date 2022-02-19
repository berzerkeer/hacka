import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import LoginForm from 'components/Forms/Login';
import AuthPage from './AuthPage';

import './auth.scss';

function Auth() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect from="/" to="/login" />
        </Route>
        <Route exact path="/login">
          <AuthPage>
            <LoginForm />
          </AuthPage>
        </Route>
      </Switch>
    </div>
  );
}

export default Auth;
