import React from 'react';
import './navitem.scss';

function NavItem({ icon, tagName }) {
  return (
    <li className="navitem">
      <span className="navitem__name">{tagName}</span>
      {icon && <button className="navitem__button">{icon}</button>}
    </li>
  );
}

export default NavItem;
