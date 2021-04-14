import moment from "moment";

type Props = {
  breakLength: number;
  decrementBreakByOneMinute: any;
  incrementBreakByOneMinute: any;
};

export const Break = ({
  breakLength,
  decrementBreakByOneMinute,
  incrementBreakByOneMinute,
}: Props) => {
  const breakLenghtInMinutes = moment.duration(breakLength, "s").minutes();

  return (
    <div>
      <p id="break-label">Break</p>
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
