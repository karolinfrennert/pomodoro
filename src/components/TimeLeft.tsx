import * as moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { Title, Button } from "./Atoms";
import styled from "styled-components";

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
    <StyledTimeleft>
      <Title id="timer-label">{timerLabel}</Title>
      <p id="time-left">{formattedTimeLeft}</p>
      <Button onClick={handleStartStopClick}>{startStopButtonLable}</Button>
    </StyledTimeleft>
  );
};

const StyledTimeleft = styled.div`
  display: grid;
  grid-area: timeleft;
`;
