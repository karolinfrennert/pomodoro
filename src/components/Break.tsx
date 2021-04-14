import { useState } from "react";
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

  return (
    <div>
      <p id="break-label">Break</p>
      <p id="break-length">{breakLenght}</p>
      <button onClick={incrementBreakByOneMinute}>+</button>
      <button onClick={decrementBreakByOneMinute}>-</button>
    </div>
  );
};
