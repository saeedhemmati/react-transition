import React from 'react';
import './transition.scss';

const Transition = (props) => {
  const { durationMS, effect, children } = props;

  return (
    <div
      style={{
        transitionDuration: `${durationMS}ms`,
      }}
      className={`container ${effect}`}
    >
      {children}
    </div>
  );
};

export default Transition;
