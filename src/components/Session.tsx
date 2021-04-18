import moment from "moment";
import { Title } from "./Break";

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
      <Title id="session-label">Set session time</Title>
      <p id="session-length">{sessionLenghtInMinutes}</p>
      <button
        id="session-decrement"
        onClick={decrementSessionByOneMinute}
        key="session-decrese"
      >
        -
      </button>
      <button
        id="session-increment"
        onClick={incrementSessionByOneMinute}
        key="session-increase"
      >
        +
      </button>
    </div>
  );
};
