import { useState, useEffect, useRef } from "react";
import { Break } from "./Break";
import { Button } from "./Atoms/Button";

import { Session } from "./Session";
import { TimeLeft } from "./TimeLeft";
import styled from "styled-components";

const BREAK_LENGTH = 300;
const SESSION_LENGTH = 1500;
const SESSION = "Time to focus";
const BREAK = "Take a break";
const RESET = "Reset timer";

function App() {
  const audioElement = useRef<HTMLAudioElement | null>(null);
  const [sessionLenght, setSessionLenght] = useState(SESSION_LENGTH);
  const [breakLenght, setBreakLenght] = useState(BREAK_LENGTH);
  const [currentSessionType, setCurrentSessionType] = useState(SESSION);
  const [timeLeft, setTimeLeft] = useState(sessionLenght);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTimeLeft(sessionLenght);
  }, [sessionLenght]);

  useEffect(() => {
    if (timeLeft === 0) {
      audioElement?.current?.play();

      if (currentSessionType === SESSION) {
        setCurrentSessionType(BREAK);
        setTimeLeft(breakLenght);
      } else if (currentSessionType === BREAK) {
        setCurrentSessionType(SESSION);
        setTimeLeft(sessionLenght);
      }
    }
  }, [breakLenght, sessionLenght, currentSessionType, timeLeft]);

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
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      setIntervalId(newIntervalId);
    }
  };

  const handleResetButtonClick = () => {
    audioElement?.current?.load();
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIntervalId(null);
    setCurrentSessionType(SESSION);
    setSessionLenght(SESSION_LENGTH);
    setBreakLenght(BREAK_LENGTH);
    setTimeLeft(SESSION_LENGTH);
  };

  return (
    <StyledApp>
      <TimeLeft
        handleStartStopClick={handleStartStopClick}
        timerLabel={currentSessionType}
        startStopButtonLable={isStarted ? "Stop" : "Start"}
        timeLeft={timeLeft}
      />
      <Break
        breakLength={breakLenght}
        decrementBreakByOneMinute={decrementBreakByOneMinute}
        incrementBreakByOneMinute={incrementBreakByOneMinute}
      />
      <Session
        sessionLength={sessionLenght}
        decrementSessionByOneMinute={decrementSessionByOneMinute}
        incrementSessionByOneMinute={incrementSessionByOneMinute}
      />
      <Button
        id="reset"
        className="button__reset"
        onClick={handleResetButtonClick}
      >
        {RESET}
      </Button>
      <audio id="beep" ref={audioElement}>
        <source
          src="https://onlineclock.net/audio/options/bird-song.mp3"
          type="audio/mpeg"
        ></source>
      </audio>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.main`
  display: grid;
  grid-template-areas: "timeleft timeleft" "break session" "reset reset";
  .button__reset {
    grid-area: reset;
  }
`;
