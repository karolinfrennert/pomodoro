import { useState } from "react";
import moment from "moment";

const sessionTime = 1500;

export const Session = () => {
  const [sessionLenght, setSessionLenght] = useState(sessionTime);
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

  const sessionLenghtInMinutes = moment.duration(sessionLenght, "s").minutes();

  return (
    <div>
      <p id="session-label">Session</p>
      <p id="session-length">{sessionLenghtInMinutes}</p>
      <button
        id="session-decrement"
        onClick={decrementSessionByOneMinute}
        key="session-decrese"
      >
        -
      </button>
      <button
        id="session-increment"
        onClick={incrementSessionByOneMinute}
        key="session-increase"
      >
        +
      </button>
    </div>
  );
};
