import React from "react";

import { useState, useEffect } from "react";
import { Break } from "./components/Break";

import "./App.css";
import { Session } from "./components/Session";
import { TimeLeft } from "./components/TimeLeft";
import { clearInterval } from "timers";

function App() {
  const [sessionLenght, setSessionLenght] = useState(1500);
  const [breakLenght, setBreakLenght] = useState(300);
  const [currentSessionType, setCurrentSessionType] = useState("Session");
  const [timeLeft, setTimeLeft] = useState(sessionLenght);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTimeLeft(sessionLenght);
  }, [sessionLenght]);

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

  const isStarted = intervalId !== null;
  const handleStartStopClick = () => {
    if (isStarted && intervalId) {
      clearInterval(intervalId);

      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prev) => {
          const newTimeLeft = prev - 1;

          if (newTimeLeft >= 0) {
            return prev - 1;
          }

          if (currentSessionType === "Session") {
            setCurrentSessionType("Break");
            setTimeLeft(breakLenght);
          }

          if (currentSessionType === "Break") {
            setCurrentSessionType("Session");
            setTimeLeft(sessionLenght);
          }

          return prev;
        });
      }, 100);

      setIntervalId(newIntervalId);
    }
  };

  const handleResetButtonClick = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentSessionType("Session");
    setSessionLenght(60 * 25);
    setBreakLenght(60 * 5);
    setTimeLeft(60 * 25);
  };

  return (
    <div className="App">
      <Break
        breakLength={breakLenght}
        decrementBreakByOneMinute={decrementBreakByOneMinute}
        incrementBreakByOneMinute={incrementBreakByOneMinute}
      />
      <TimeLeft
        handleStartStopClick={handleStartStopClick}
        timerLabel={currentSessionType}
        startStopButtonLable={isStarted ? "Stop" : "Start"}
        timeLeft={timeLeft}
      />
      <Session
        sessionLength={sessionLenght}
        decrementSessionByOneMinute={decrementSessionByOneMinute}
        incrementSessionByOneMinute={incrementSessionByOneMinute}
      />
      <button id="reset" onClick={handleResetButtonClick}>
        Reset
      </button>
    </div>
  );
}

export default App;
