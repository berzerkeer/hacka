import React from 'react';
import Avatar from 'assets/images/dp.png';
import './userchip.scss';

function UserChip({ user, isMini }) {
  const firstName = user && user.name.split(' ')[0];
  return (
    <div className="userchip flex flex-ai-c">
      <img className="userchip__profilepic" src={Avatar} alt="profile-pic" />
      {!isMini && <span className="userchip__name">{firstName}</span>}
    </div>
  );
}

export default UserChip;
