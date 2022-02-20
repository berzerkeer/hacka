import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUserStore } from 'store/user';

import UserChip from 'components/UserChip';

import './header.scss';

function Header() {
  const { currentUser } = useUserStore((state) => state);
  const history = useHistory();

  const logOut = () => {
    history.push('/login');
    useUserStore.getState().logOut();
  };

  return (
    <header className="header">
      <nav className="container flex flex-jc-sb flex-ai-c">
        <Link to="/" className="header_logo">
          <h2>berzerk.</h2>
        </Link>
        <ul className="header__menu flex flex-ai-c">
          <span className="header__menu__profiletag flex flex-ai-c">
            <UserChip user={currentUser} isMini={false} />
            {/* <UserChip name="Sangeeth" /> */}
            <button className="logout__btn" onClick={logOut}>
              Logout
            </button>
          </span>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
