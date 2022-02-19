/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import UserChip from 'components/UserChip';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import IconBadge from 'components/IconBadge';

import { ReactComponent as ThumbsUp } from 'assets/icons/thumbs-up.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow-up.svg';

import './hackathoncard.scss';

function HackathonCard({ testText }) {
  const { pageId } = useParams();
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
              Lowcode tool for Payments
            </h2>
            <p className="hackathon__info__description">
              Lowcode no code is booming and i believe a low code platform to
              build payments integrations is a greay way to go about. Lowcode no
              code is booming and i believe a low code platform to build
              payments integrations is a greay way to go about. Lowcode no code
              is booming and i believe a low code platform to build payments
              integrations is a greay way to go about. Lowcode no code is
              booming and i believe a low code platform to build payments
              integrations is a greay way to go about.
            </p>
          </div>
          <div className="user__info flex flex-ai-c">
            <div className="user__info__meta flex flex-ai-c">
              <span className="chip">
                <UserChip />
              </span>
              <span className="annotation">
                posted by <span className="name">Sangeeth Sivan</span>
              </span>
            </div>
            <div className="user__info__post">
              <span className="date">12 hr ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HackathonCard;
