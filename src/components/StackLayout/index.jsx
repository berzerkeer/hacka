import React from 'react';
import { useParams } from 'react-router-dom';
import HackathonCard from 'components/HackathonCard';

import './stacklayout.scss';

function StackLayout() {
  const { pageId, tagId } = useParams();
  console.log(pageId, tagId);
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
