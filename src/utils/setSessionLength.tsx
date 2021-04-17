export const incrementSession = (time: any, setTime: any) => {
  const newTime = time + 60;
  newTime < 0 ? setTime(0) : setTime(newTime);
};
