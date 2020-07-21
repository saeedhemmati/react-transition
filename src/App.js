import React, { useState } from 'react';
import Transition from './components/transition/Transition';

const App = () => {
  const [effect, setEffect] = useState('fadeIn');

  const handleFadeEffect = () => {
    if (effect === 'fadeIn') {
      setEffect('fadeOut');
    } else {
      setEffect('fadeIn');
    }
  }

  return (
    <>
      <Transition
        effect={effect}
        durationMS={200}
      >
        <p>Fade transition</p>
      </Transition>
      <button
        type="button"
        onClick={handleFadeEffect}
      >
        Click!
      </button>
    </>
  );
}

export default App;
