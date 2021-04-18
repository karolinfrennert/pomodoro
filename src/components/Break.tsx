import moment from "moment";

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
      <p id="break-label">Set break time</p>
      <p id="break-length">{breakLenghtInMinutes}</p>
      <button
        id="break-decrement"
        onClick={decrementBreakByOneMinute}
        key="break-decrese"
      >
        -
      </button>
      <button
        id="break-increment"
        onClick={incrementBreakByOneMinute}
        key="break-increase"
      >
        +
      </button>
    </div>
  );
};
