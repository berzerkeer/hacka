import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import IconBadge from 'components/IconBadge';
import UserChip from 'components/UserChip';

import { ReactComponent as ArrowUp } from 'assets/icons/arrow-up.svg';

import './hackathoncard.scss';

function HackathonCard({ post }) {
  const { pageId } = useParams();
  const { title, description, createdBy, createdAt } = post;
  const history = useHistory();
  function handleClick() {
    history.push(`${pageId}/challenge/2`);
  }

  return (
    <div className="card flex">
      <div className="card__content flex ">
        <div className="card__meta ">
          <IconBadge label="46">
            <ArrowUp />
          </IconBadge>
        </div>
        <div className="card__details">
          <div className="hackathon__info">
            <h2 className="hackathon__info__title" onClick={handleClick}>
              {title}
            </h2>
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
