import React, { useState } from 'react';
import Transition from '../public/transition/Transition';
import SunsetImage from '../../assets/images/sunset.jpeg';

const Slide = () => {
  const [slideEffect, setSlideEffect] = useState('slideInDown');

  const toggleSlideEffect = () => {
    if (slideEffect === 'slideInDown') {
      setSlideEffect('slideInUp');
    } else {
      setSlideEffect('slideInDown');
    }
  }

  return (
    <>
      <Transition
        effect={slideEffect}
        durationMS={200}
      >
        <img src={SunsetImage} />
      </Transition>
      <button
        type="button"
        onClick={toggleSlideEffect}
      >
        click!
      </button>
    </>
  );
};

export default Slide;
