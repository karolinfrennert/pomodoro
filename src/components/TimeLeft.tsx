import { useState } from "react";

type Props = {
  sessionLength: number;
};

export const TimeLeft = ({ sessionLength }: Props) => {
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  const minutes = (timeLeft / 60) % 60;
  const seconds = timeLeft - minutes * 60;
  return (
    <div>
      {minutes} : {seconds}
    </div>
  );
};
