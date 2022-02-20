import React from 'react';
import UserChip from 'components/UserChip';

import './post.scss';

function Post(props) {
  return (
    <div className="challenge__info flex flex-jc-c">
      <div>
        <h2 className="challenge__info__title">Lowcode tool for Payments</h2>
        <div className="challenge__user__info flex flex-ai-c">
          <div className="challenge__user__info__meta flex flex-ai-c">
            <span className="chip">
              <UserChip isMini />
            </span>
            <span className="annotation">
              posted by <span className="name">Sangeeth Sivan</span>
            </span>
          </div>
          <div className="challenge__user__info__post">
            <span className="date">12 hr ago</span>
          </div>
        </div>
      </div>
      <div>
        <p className="challenge__info__description">
          Lowcode no code is booming and i believe a low code platform to build
          payments integrations is a greay way to go about. Lowcode no code is
          booming and i believe a low code platform to build payments
          integrations is a greay way to go about. Lowcode no code is booming
          and i believe a low code platform to build payments integrations is a
          greay way to go about. Lowcode no code is booming and i believe a low
          code platform to build payments integrations is a greay way to go
          about.
        </p>
      </div>
    </div>
  );
}

export default Post;
