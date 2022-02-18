import React from 'react';
import './iconbadge.scss';

function IconBadge({ children, label }) {
  return (
    <div className="badge__container flex flex-ai-c">
      <span className="badge__container__icon">{children}</span>
      <span className="badge__container__label">{label}</span>
    </div>
  );
}

export default IconBadge;
