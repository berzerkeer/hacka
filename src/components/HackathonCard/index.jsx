/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import dayjs from 'dayjs';

import { useUserStore } from 'store/user';
import { usePoststore } from 'store/posts';
import { useAppstore } from 'store/globalStore';

import IconBadge from 'components/IconBadge';
import UserChip from 'components/UserChip';

import DeleteModal from 'components/Modal/DeleteModal';
import EditChallengeModal from 'components/Modal/EditChallengeModal';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow-up.svg';

import './hackathoncard.scss';

function HackathonCard({ post }) {
  const { id, title, description, createdBy, createdAt, upvoteCount } = post;

  const { currentUser } = useUserStore((state) => state);

  const isAlreadyUpVoted = currentUser?.upvotes?.includes(id);

  const history = useHistory();
  const match = useRouteMatch('/:id');

  function handleClick(e) {
    e.stopPropagation();
    history.push({
      pathname: `${match.url}/challenge/${post.slug}`,
      state: { id }
    });
  }

  async function handleUpvote() {
    try {
      const userRes = await fetch(
        `http://localhost:8000/user/${currentUser.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            upvotes: isAlreadyUpVoted
              ? currentUser.upvotes.filter((el) => el !== id)
              : [...currentUser.upvotes, id]
          })
        }
      );

      const userObj = await userRes.json();
      useUserStore.getState().setCurrentUser(userObj);

      const res = await fetch(`http://localhost:8000/post/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          upvoteCount: isAlreadyUpVoted
            ? upvoteCount > 1
              ? upvoteCount - 1
              : 1
            : upvoteCount + 1
        })
      });
      const postData = await res.json();
      usePoststore.getState().setPost(postData);
      useAppstore.getState().updatePosts(postData);
    } catch (error) {
      console.error('Error when upvoting challenge', error);
    }
  }

  return (
    <div className="card flex">
      <div className="card__content flex ">
        <div className="card__meta ">
          <IconBadge
            label={upvoteCount}
            handleClick={handleUpvote}
            isAlreadyUpVoted={isAlreadyUpVoted}
          >
            <ArrowUp />
          </IconBadge>
        </div>
        <div className="card__details">
          <div className="hackathon__info">
            <div className="title__content flex flex-ai-c">
              <h2 className="hackathon__info__title" onClick={handleClick}>
                {title}
              </h2>
              {createdBy?.id === currentUser?.id && (
                <div className="action__icons flex flex-ai-c">
                  <DeleteModal postId={id} />
                  <EditChallengeModal post={post} />
                </div>
              )}
            </div>
            <p className="hackathon__info__description">{description}</p>
          </div>
          <div className="user__info flex flex-ai-c">
            <div className="user__info__meta flex flex-ai-c">
              <span className="chip">
                <UserChip isMini />
              </span>
              <span className="annotation">
                posted by <span className="name">{createdBy.name}</span>
              </span>
            </div>
            <div className="user__info__post">
              <span className="date">
                {dayjs(createdAt).format('DD MMM YYYY')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HackathonCard;
