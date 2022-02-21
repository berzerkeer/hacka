/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import StackLayout from 'components/StackLayout';
import Post from 'components/Post';

import './mainlayout.scss';
import { useAppstore } from 'store/globalStore';

function MainLayout() {
  useEffect(() => {
    async function getTags() {
      const res = await fetch('http://localhost:8000/tags');
      const tagsObj = await res.json();
      useAppstore.getState().setTags(tagsObj);
    }
    getTags();
  }, []);

  return (
    <>
      <Header />
      <div className="page__layout container">
        <div className="page__layout__sidebar">
          <Sidebar />
        </div>
        <div className="page__layout__content">
          <Switch>
            <Route exact path="/">
              <Redirect from="/" to="/all" />
            </Route>
            <Route path="/:pageId/challenge/:id" exact>
              <Post />
            </Route>
            <Route path="/:pageId/:tagId" exact>
              <StackLayout />
            </Route>
            <Route path="/:pageId">
              <StackLayout />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
