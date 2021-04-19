import moment from "moment";
import styled from "styled-components";
import { Button, Title } from "./Atoms";

type Props = {
  sessionLength: number;
  decrementSessionByOneMinute: () => void;
  incrementSessionByOneMinute: () => void;
};

export const Session: React.FC<Props> = ({
  sessionLength,
  decrementSessionByOneMinute,
  incrementSessionByOneMinute,
}: Props) => {
  const sessionLenghtInMinutes = moment
    .duration(sessionLength, "s")
    .asMinutes();
  return (
    <StyledSession>
      <Title id="session-label">Session length</Title>
      <Title id="session-length">{sessionLenghtInMinutes}</Title>
      <div className="flex">
        <Button
          id="session-decrement"
          onClick={decrementSessionByOneMinute}
          key="session-decrese"
          ghost
        >
          -
        </Button>
        <Button
          id="session-increment"
          onClick={incrementSessionByOneMinute}
          key="session-increase"
          ghost
        >
          +
        </Button>
      </div>
    </StyledSession>
  );
};

const StyledSession = styled.div`
  display: grid;
  grid-area: session;
  .flex {
    display: flex;
    justify-content: center;
  }
`;
