import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';

import NavMenuItem from 'components/NavMenuItem';

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

const predefinedTags = [
  {
    id: 1,
    route: 'tech',
    name: 'tech'
  },
  {
    id: 2,
    route: 'feature',
    name: 'feature'
  },
  {
    id: 3,
    route: 'piratenight',
    name: 'piratenight'
  },
  {
    id: 4,
    route: 'chapter',
    name: 'chapter'
  },
  {
    id: 5,
    route: 'tooling',
    name: 'tooling'
  },
  {
    id: 6,
    route: 'devops',
    name: 'devops'
  }
];

function Sidebar() {
  return (
    <nav className="sidenav flex">
      <ul className="sidenav__categories">
        {routes.map((route) => (
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
          {predefinedTags.map((route) => (
            <li key={route.id}>
              <NavMenuItem route={route.route} name={route.name} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
