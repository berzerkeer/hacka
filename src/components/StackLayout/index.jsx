import React from 'react';
import { useParams } from 'react-router-dom';
import HackathonCard from 'components/HackathonCard';

import './stacklayout.scss';

function StackLayout() {
  const { pageId } = useParams();
  return (
    <>
      <h2 className="page__title">{pageId}</h2>
      <div className="gridparent">
        <HackathonCard />
      </div>
    </>
  );
}

export default StackLayout;
