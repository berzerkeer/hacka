import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './navmenuitem.scss';

function NavMenuItem(props) {
  const { route, name, icon, isMain } = props;
  const match = useRouteMatch();
  console.log('path', match);
  return (
    <Link to={route} className={`${isMain ? 'main' : 'tag'} flex flex-ai-c`}>
      {icon && <span className="nav_icon">{icon}</span>}
      <span className="nav_name">{name}</span>
    </Link>
  );
}

export default NavMenuItem;
