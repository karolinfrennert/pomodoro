import { useState } from "react";
import moment from "moment";

type Props = {
  sessionLength: number;
  decrementSessionByOneMinute: any;
  incrementSessionByOneMinute: any;
};

export const Session = ({
  sessionLength,
  decrementSessionByOneMinute,
  incrementSessionByOneMinute,
}: Props) => {
  const sessionLenghtInMinutes = moment.duration(sessionLength, "s").minutes();
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
