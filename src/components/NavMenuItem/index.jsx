import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './navmenuitem.scss';

function NavMenuItem(props) {
  const { route, name, icon, isMain } = props;
  const history = useHistory();
  const match = useRouteMatch('/:id');

  const navigateToPage = () => {
    history.push(isMain ? `/${route}` : `${match.url}/${route}`);
  };
  return (
    <div
      className={`${isMain ? 'main' : 'tag'} flex flex-ai-c`}
      onClick={navigateToPage}
    >
      {icon && <span className="nav_icon">{icon}</span>}
      <span className="nav_name">{name}</span>
    </div>
  );
}

export default NavMenuItem;
