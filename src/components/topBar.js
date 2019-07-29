import React from 'react';

const TopBar = props => {
  return (
    <div>
      <span>Score {props.score}</span>
      <span>Message {props.message}</span>
      <span>Top Score{props.topScore}</span>
    </div>
  );
};

export default TopBar;