import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import StackLayout from 'components/StackLayout';
import Post from 'components/Post';

import './mainlayout.scss';

function MainLayout() {
  return (
    <div className="page__layout container">
      <div className="page__layout__sidebar">
        <Sidebar />
      </div>
      <div className="page__layout__content">
        <Switch>
          <Route path="/" exact>
            <Redirect from="/" to="all/challenge/1234" />
          </Route>
          <Route path="/:pageId" exact>
            <StackLayout />
          </Route>
          <Route path="/:pageId/challenge/:id" exact>
            <Post />
          </Route>
          <Route path="/:pageId/:tagId" exact>
            <StackLayout />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default MainLayout;
