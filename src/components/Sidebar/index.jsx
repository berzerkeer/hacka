import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar.scss';

function Sidebar({ children }) {
  return (
    <nav className="sidenav flex">
      <ul className="sidenav__categories">
        <li>
          <Link to="/">all</Link>
        </li>
        <li>
          <Link to="/popular">popular</Link>
        </li>
        <li>
          <Link to="/trending">trending</Link>
        </li>
      </ul>
      <div className="sidenav__tags">
        <span className="sidenav__tags__title">tags</span>
        <ul className="sidenav__tags__list">{children}</ul>
      </div>
    </nav>
  );
}

export default Sidebar;
