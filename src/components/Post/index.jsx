import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';

import UserChip from 'components/UserChip';
import { ReactComponent as ArrowLeftIcon } from 'assets/icons/arrow-left.svg';

import './post.scss';

function Post() {
  const history = useHistory();
  const [post, setPost] = useState();
  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(
          `http://localhost:8000/post/${history.location.state.id}`
        );
        const postObj = await res.json();
        console.log(postObj);
        setPost(postObj);
      } catch (error) {
        console.error('Error fetching post', error);
      }
    }
    fetchPost();
  }, []);

  return (
    <>
      <span
        className="back__btn flex flex-ai-c"
        onClick={() => history.goBack()}
      >
        <ArrowLeftIcon />
        <span>Back</span>
      </span>
      <div className="challenge__info flex flex-jc-c">
        <div>
          <h2 className="challenge__info__title">{post?.title}</h2>
          <div className="challenge__user__info flex flex-ai-c">
            <div className="challenge__user__info__meta flex flex-ai-c">
              <span className="chip">
                <UserChip isMini />
              </span>
              <span className="annotation">
                posted by <span className="name">{post?.createdBy.name}</span>
              </span>
            </div>
            <div className="challenge__user__info__post">
              <span className="date">
                {dayjs(post?.createdAt).format('DD MMM YYYY')}
              </span>
            </div>
          </div>
        </div>
        <div className="info__wrapper">
          <p className="challenge__info__description">{post?.description}</p>
        </div>
      </div>
    </>
  );
}

export default Post;
