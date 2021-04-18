import moment from "moment";
import { Title, Button } from "./Break";

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
    <div>
      <Title id="session-label">Session length</Title>
      <p id="session-length">{sessionLenghtInMinutes}</p>
      <Button
        id="session-decrement"
        onClick={decrementSessionByOneMinute}
        key="session-decrese"
      >
        -
      </Button>
      <Button
        id="session-increment"
        onClick={incrementSessionByOneMinute}
        key="session-increase"
      >
        +
      </Button>
    </div>
  );
};
