import UserChip from 'components/UserChip';
import React from 'react';
import './header.scss';

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <nav className="container flex flex-jc-sb flex-ai-c">
        <a href="/" className="header_logo">
          <h2>berzerk.</h2>
        </a>
        <ul className="header__menu flex flex-ai-c">
          <span className="header__menu__profiletag">
            <UserChip name="Sangeeth" />
          </span>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
