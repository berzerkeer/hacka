import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import HackathonCard from 'components/HackathonCard';
import AddNewModal from 'components/Modal/AddNewModal';

import './stacklayout.scss';

function StackLayout() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('http://localhost:8000/post');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts', error);
      }
    }
    fetchPosts();
    return () => {
      console.log('later utilize abort controller');
    };
  }, []);

  const { pageId } = useParams();
  return (
    <>
      <h2 className="page__title">{pageId}</h2>
      <AddNewModal />
      <div className="gridparent">
        {posts.map((post) => (
          <HackathonCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default StackLayout;
