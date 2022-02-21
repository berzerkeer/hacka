import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppstore } from 'store/globalStore';

import HackathonCard from 'components/HackathonCard';
import AddNewModal from 'components/Modal/AddNewModal';

import { ReactComponent as SortAscIcon } from 'assets/icons/sort-asc.svg';
import { ReactComponent as SortDescIcon } from 'assets/icons/sort-desc.svg';

import './stacklayout.scss';

function StackLayout() {
  useEffect(() => {
    useAppstore.getState().getPosts();
  }, []);

  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');

  const { posts } = useAppstore((state) => state);
  const { pageId } = useParams();

  const sortAndUpdatePosts = async (order, sortParameter) => {
    try {
      const res = await fetch(
        `http://localhost:8000/post?_sort=${sortParameter}&_order=${order}`
      );
      const data = await res.json();
      useAppstore.getState().setPostsbySortOrder(data);
    } catch (error) {
      console.error('Error sorting posts', error);
    }
  };

  const handleSortOrder = (val) => {
    setSortOrder(val);
    sortAndUpdatePosts(val, sortBy);
  };

  const handleSortBy = (val) => {
    setSortBy(val);
    sortAndUpdatePosts(sortOrder, val);
  };

  return (
    <>
      <h2 className="page__title">{pageId}</h2>
      <AddNewModal />
      {posts && posts.length > 0 && (
        <div className="sort__options">
          {sortOrder === 'asc' ? (
            <SortAscIcon onClick={() => handleSortOrder('desc')} />
          ) : (
            <SortDescIcon onClick={() => handleSortOrder('asc')} />
          )}
          <span
            className={`upvote ${sortBy === 'upvoteCount' ? 'active' : null}`}
            onClick={() => handleSortBy('upvoteCount')}
          >
            Upvotes
          </span>
          <span
            className={`date ${sortBy === 'createdAt' ? 'active' : null}`}
            onClick={() => handleSortBy('createdAt')}
          >
            Date
          </span>
        </div>
      )}
      <div className="gridparent">
        {posts.map((post) => (
          <HackathonCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default StackLayout;
