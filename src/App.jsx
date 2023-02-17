import React, { useState } from "react";
//import { Toggle } from './Toggle'

function App() {
  const [counter, setCounter] = useState(0);

  const handleClickInc = () => {
    setCounter(counter + 1);
  };

  const handleClickDec = () => {
    setCounter(counter - 1 < 0 ? 0 : counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="main_div">
      <div className="counter">
        <h1>Counter {counter}</h1>
        <div className="button">
          <button id="b" onClick={handleClickInc}>
            +
          </button>
          <button id="b" onClick={handleClickDec}>
            -
          </button>
          <button id="b" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
