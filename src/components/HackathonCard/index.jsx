import UserChip from 'components/UserChip';
import React from 'react';

// import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import './hackathoncard.scss';

function HackathonCard({ testText }) {
  function handleClick() {
    console.log('clicked');
  }

  return (
    <div className="card flex">
      <div className="card__content flex flex-ai-c">
        <div className="card__meta flex flex-ai-c">
          <UserChip />
        </div>
        <div className="card__details">
          <h2 className="hackathon_title">Lowcode tool for Payments</h2>
          <p className="hackathon_description">
            Lowcode no code is booming and i believe a low code platform to
            build payments integrations is a greay way to go about.{' '}
          </p>
          <button className="hackathon_details" onClick={handleClick}>
            <span>More details </span>
            <span>{/* <ArrowRight /> */}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HackathonCard;
