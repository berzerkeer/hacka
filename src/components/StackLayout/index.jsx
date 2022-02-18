import HackathonCard from 'components/HackathonCard';
import React from 'react';
import './stacklayout.scss';

function StackLayout({ testText, title }) {
  return (
    <>
      <h2 className="page__title">{title}</h2>
      <div className="gridparent">
        <HackathonCard />
      </div>
    </>
  );
}

export default StackLayout;
