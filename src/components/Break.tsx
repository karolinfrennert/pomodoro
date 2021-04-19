import moment from "moment";
import styled from "styled-components";
import { Title, Button } from "./Atoms";

type Props = {
  breakLength: number;
  decrementBreakByOneMinute: () => void;
  incrementBreakByOneMinute: () => void;
};

export const Break: React.FC<Props> = ({
  breakLength,
  decrementBreakByOneMinute,
  incrementBreakByOneMinute,
}) => {
  const breakLenghtInMinutes = moment.duration(breakLength, "s").asMinutes();

  return (
    <StyledBreak>
      <Title id="break-label">Break length</Title>
      <Title id="break-length">{breakLenghtInMinutes}</Title>
      <div className="flex">
        <Button
          id="break-decrement"
          onClick={decrementBreakByOneMinute}
          key="break-decrese"
          ghost
        >
          -
        </Button>
        <Button
          id="break-increment"
          onClick={incrementBreakByOneMinute}
          key="break-increase"
          ghost
        >
          +
        </Button>
      </div>
    </StyledBreak>
  );
};

const StyledBreak = styled.div`
  display: grid;
  grid-area: break;
  .flex {
    display: flex;
    justify-content: center;
  }
`;
