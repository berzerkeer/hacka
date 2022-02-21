import React from 'react';
import './iconbadge.scss';

function IconBadge({ children, label, handleClick, isAlreadyUpVoted }) {
  const onUpvote = (e) => {
    e.preventDefault();
    handleClick();
  };

  return (
    <div
      className={`badge__container flex flex-ai-c ${
        isAlreadyUpVoted ? 'upvoted' : ''
      }`}
      onClick={onUpvote}
    >
      <span className="badge__container__icon">{children}</span>
      <span className="badge__container__label">{label}</span>
    </div>
  );
}

export default IconBadge;
