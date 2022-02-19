/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';
import './navmenuitem.scss';

function NavMenuItem(props) {
  const { route, name, icon, isMain } = props;
  const history = useHistory();
  const params = useParams();
  const match = useRouteMatch('/:id');

  const navigateToPage = () => {
    console.log(match, params);
    history.push(isMain ? route : `${match.url}/${route}`);
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
