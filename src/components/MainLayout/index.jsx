import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavItem from 'components/NavItem';
import Sidebar from 'components/Sidebar';

import './mainlayout.scss';
import StackLayout from 'components/StackLayout';
import HackathonCard from 'components/HackathonCard';

function MainLayout() {
  return (
    <div className="page__layout container">
      <div className="page__layout__sidebar">
        <Sidebar>
          <NavItem tagName="tech" />
          <NavItem tagName="feature" />
          <NavItem tagName="piratenight" />
          <NavItem tagName="chapter" />
          <NavItem tagName="tooling" />
          <NavItem tagName="devops" />
          <NavItem tagName="performance" />
        </Sidebar>
      </div>
      <div className="page__layout__content">
        <Routes>
          <Route
            path="/"
            element={<StackLayout testText="all" title="#popular" />}
          />
          <Route exact path="/card" element={<HackathonCard />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainLayout;
