import React from "react";

import { useState } from "react";
import { Break } from "./components/Break";

import "./App.css";
import { Session } from "./components/Session";
import { TimeLeft } from "./components/TimeLeft";

function App() {
  const [sessionLenght, setSessionLenght] = useState(1500);
  const [breakLenght, setBreakLenght] = useState(300);

  const decrementSessionByOneMinute = () => {
    const newSessionLenght = sessionLenght - 60;
    newSessionLenght < 0
      ? setSessionLenght(0)
      : setSessionLenght(newSessionLenght);
  };
  const incrementSessionByOneMinute = () => {
    const newSessionLenght = sessionLenght + 60;
    newSessionLenght < 0
      ? setSessionLenght(0)
      : setSessionLenght(newSessionLenght);
  };

  const decrementBreakByOneMinute = () => {
    const newBreakLenght = breakLenght - 60;
    newBreakLenght < 0 ? setBreakLenght(0) : setBreakLenght(newBreakLenght);
  };
  const incrementBreakByOneMinute = () => {
    const newBreakLenght = breakLenght + 60;
    newBreakLenght < 0 ? setBreakLenght(0) : setBreakLenght(newBreakLenght);
  };

  return (
    <div className="App">
      <Break
        breakLength={breakLenght}
        decrementBreakByOneMinute={decrementBreakByOneMinute}
        incrementBreakByOneMinute={incrementBreakByOneMinute}
      />
      <TimeLeft sessionLength={sessionLenght} />
      <Session
        sessionLength={sessionLenght}
        decrementSessionByOneMinute={decrementSessionByOneMinute}
        incrementSessionByOneMinute={incrementSessionByOneMinute}
      />
    </div>
  );
}

export default App;
