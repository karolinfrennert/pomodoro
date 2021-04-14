import { useState } from "react";
import moment from "moment";

export const Break = () => {
  const [breakLenght, setBreakLenght] = useState(300);
  const decrementBreakByOneMinute = () => {
    const newBreakLenght = breakLenght - 60;
    newBreakLenght < 0 ? setBreakLenght(0) : setBreakLenght(newBreakLenght);
  };
  const incrementBreakByOneMinute = () => {
    const newBreakLenght = breakLenght + 60;
    newBreakLenght < 0 ? setBreakLenght(0) : setBreakLenght(newBreakLenght);
  };

  const breakLenghtInMinutes = moment.duration(breakLenght, "s").minutes();

  return (
    <div>
      <p id="break-label">Break</p>
      <p id="break-length">{breakLenghtInMinutes}</p>
      <button
        id="break-decrement"
        onClick={decrementBreakByOneMinute}
        key="break-decrese"
      >
        -
      </button>
      <button
        id="break-increment"
        onClick={incrementBreakByOneMinute}
        key="break-increase"
      >
        +
      </button>
    </div>
  );
};
