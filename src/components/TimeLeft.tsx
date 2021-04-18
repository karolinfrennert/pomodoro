import * as moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

type Props = {
  startStopButtonLable: string;
  handleStartStopClick: () => void;
  timerLabel: string;
  timeLeft: number;
};

export const TimeLeft: React.FC<Props> = ({
  startStopButtonLable,
  handleStartStopClick,
  timerLabel,
  timeLeft,
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });

  return (
    <div>
      <p id="timer-label">{timerLabel}</p>
      <p id="time-left">{formattedTimeLeft}</p>
      <button onClick={handleStartStopClick}>{startStopButtonLable}</button>
    </div>
  );
};
