import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useUserStore } from 'store/user';

import MainLayout from 'components/MainLayout';
import Auth from 'pages/Auth';

function App() {
  const { isLoggedIn } = useUserStore((state) => state);
  console.log(isLoggedIn);
  return (
    <Router>
      <Switch>
        <Route path="/">{isLoggedIn ? <MainLayout /> : <Auth />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
