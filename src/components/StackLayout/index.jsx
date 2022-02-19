import React from 'react';
import { useParams } from 'react-router-dom';

import UserChip from 'components/UserChip';
import HackathonCard from 'components/HackathonCard';

import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import './stacklayout.scss';

function StackLayout() {
  const { pageId } = useParams();
  return (
    <>
      <h2 className="page__title">{pageId}</h2>
      <div className="add__new flex flex-ai-c">
        <div className="flex flex-ai-c left">
          <span className="add__new__avatar">
            <UserChip />
          </span>
          <h2 className="add__new__text">Click to add new post</h2>
        </div>
        <span className="add__new__icon">
          <AddIcon />
        </span>
      </div>
      <div className="gridparent">
        <HackathonCard />
      </div>
    </>
  );
}

export default StackLayout;
