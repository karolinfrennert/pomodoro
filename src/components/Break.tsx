import moment from "moment";
import { Title } from "./Atoms";
import { Button } from "./Atoms/Button";

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
      <Title id="break-label">Break length</Title>
      <p id="break-length">{breakLenghtInMinutes}</p>
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
  );
};
