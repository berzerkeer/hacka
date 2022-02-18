import React from 'react';
import PrfPicPlaceholder from 'assets/images/dp.png';

import './userchip.scss';

function UserChip({ name }) {
  return (
    <div className="userchip flex flex-ai-c">
      <img
        className="userchip__profilepic"
        src={PrfPicPlaceholder}
        alt="profile-pic"
      />
      <span className="userchip__name">{name}</span>
    </div>
  );
}

export default UserChip;
