import React, { useRef } from 'react';

import NavMenuItem from 'components/NavMenuItem';
import TagsComponent from './Tags';

import './sidebar.scss';

const routes = [
  {
    id: 'all',
    route: 'all',
    name: 'all'
  },
  {
    id: 'popular',
    route: 'popular',
    name: 'popular'
  },
  {
    id: 'trending',
    route: 'trending',
    name: 'trending'
  }
];

function Sidebar() {
  const routesRef = useRef(routes);

  return (
    <nav className="sidenav flex">
      <ul className="sidenav__categories">
        {routesRef.current.map((route) => (
          <li key={route.id}>
            <NavMenuItem
              isMain
              route={route.route}
              name={route.name}
              icon={route.icon}
            />
          </li>
        ))}
      </ul>
      <div className="sidenav__tags">
        <span className="sidenav__tags__title">tags</span>
        <ul className="sidenav__tags__list">
          <TagsComponent />
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
