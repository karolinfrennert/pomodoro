import moment from "moment";
import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export const Title = styled.h2`
  color: palevioletred;
`;

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
    <div>
      <Title id="break-label">Set break time</Title>
      <p id="break-length">{breakLenghtInMinutes}</p>
      <Button
        id="break-decrement"
        onClick={decrementBreakByOneMinute}
        key="break-decrese"
      >
        -
      </Button>
      <Button
        id="break-increment"
        onClick={incrementBreakByOneMinute}
        key="break-increase"
      >
        +
      </Button>
    </div>
  );
};
