import moment from "moment";

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
      <p id="session-label">Set session time</p>
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
