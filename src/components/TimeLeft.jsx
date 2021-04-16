import { useEffect, useState } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

export const TimeLeft = ({ sessionLength }) => {
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const [intervalId, setIntervalId] = useState(null);

  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const isStarted = intervalId !== null;
  const handleStartStopClick = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prev) => {
          const newTimeLeft = prev - 1;
          return newTimeLeft >= 0 ? prev - 1 : prev;
        });
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  return (
    <div>
      {formattedTimeLeft}
      <button onClick={handleStartStopClick}>
        {isStarted ? "Stop" : "Start"}
      </button>
    </div>
  );
};
