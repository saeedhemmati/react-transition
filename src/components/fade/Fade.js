import React, { useState } from 'react';
import Transition from '../public/transition/Transition';

const Fade = () => {
  const [fadeEffect, setFadeEffect] = useState('fadeIn');

  const toggleFadeEffect = () => {
    if (fadeEffect === 'fadeIn') {
      setFadeEffect('fadeOut');
    } else {
      setFadeEffect('fadeIn');
    }
  }

  return (
    <>
      <Transition
        effect={fadeEffect}
        durationMS={200}
      >
        <p>Fade transition</p>
      </Transition>
      <button
        type="button"
        onClick={toggleFadeEffect}
      >
        Click!
      </button>
    </>
  )
};

export default Fade;
