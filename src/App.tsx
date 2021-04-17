import React, { useRef } from "react";

import { useState, useEffect } from "react";
import { Break } from "./components/Break";

import "./App.css";
import { Session } from "./components/Session";
import { TimeLeft } from "./components/TimeLeft";

const BREAK_LENGTH = 30;
const SESSION_LENGTH = 10;

function App() {
  const audioElement = useRef<HTMLAudioElement | null>(null);
  const [sessionLenght, setSessionLenght] = useState(SESSION_LENGTH);
  const [breakLenght, setBreakLenght] = useState(BREAK_LENGTH);
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
          if (newTimeLeft > 0) {
            return prev - 1;
          }
          console.log("Changed", prev);
          if (!audioElement.current) {
            console.log("AUDIO BROOOKNEEEEENNNNENENN ", audioElement.current);
          } else {
            console.log(audioElement.current);
            audioElement.current.play();
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
    if (intervalId === null) {
      console.log("hey");
      return;
    }

    if (audioElement.current === null) {
      throw Error("Audio Element is not available");
    } else {
      audioElement.current.play();
    }
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentSessionType("Session");
    setSessionLenght(SESSION_LENGTH);
    setBreakLenght(BREAK_LENGTH);
    setTimeLeft(SESSION_LENGTH);
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
      <audio id="beep" ref={audioElement}>
        <source
          src="https://onlineclock.net/audio/options/bird-song.mp3"
          type="audio/mpeg"
        ></source>
      </audio>
      <button onClick={() => audioElement.current?.play()}> PLAY AUDIO</button>
    </div>
  );
}

export default App;
