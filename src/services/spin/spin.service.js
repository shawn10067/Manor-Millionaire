import { getMonth, getYear, getDate } from "date-fns";

const SpinTimes = () => {
  // get current date in EST with date-fns
  const currentDate = new Date();

  // get the month and year from the current date
  const month = getMonth(currentDate);
  const year = getYear(currentDate);
  const day = getDate(currentDate);

  // get 8 hour intervals for current date
  const SpinIntervals = [
    new Date(year, month, day, 1, 54, 0, 0),
    new Date(year, month, day, 8, 0, 0, 0),
    new Date(year, month, day, 16, 0, 0, 0),
    new Date(year, month, day, 24, 0, 0, 0),
  ];
  return SpinIntervals;
};

// genereate spin time for yesterday
const getYesterdaySpin = () => {
  // get current date in EST with date-fns
  const currentDate = new Date();
  // get the month and year from the current date
  const month = getMonth(currentDate);
  const year = getYear(currentDate);
  const day = getDate(currentDate) - 1;

  const yesterday = new Date(year, month, day, 24, 0, 0, 0);
  return yesterday;
};

// genereate spin time for tommorrow
const getTommorowSpin = () => {
  // get current date in EST with date-fns
  const currentDate = new Date();
  // get the month and year from the current date
  const month = getMonth(currentDate);
  const year = getYear(currentDate);
  const day = getDate(currentDate) + 1;

  const yesterday = new Date(year, month, day, 8, 0, 0, 0);
  return yesterday;
};

// getting next spin time
export const getNextSpinTime = () => {
  // get the current time
  const currentTime = new Date();
  // get the next spin time
  const nextSpinTime = SpinTimes().find((spinTime) => {
    // if the spin time is after the current time, return it
    return spinTime.getTime() > currentTime.getTime();
  });

  console.log(nextSpinTime);

  if (!nextSpinTime) {
    return getTommorowSpin();
  }
  return nextSpinTime;
};

// getting previous spin time
export const getPreviousSpinTime = () => {
  // get the current time
  const currentTime = new Date();

  // get the previous spin time
  const previousSpinTime = SpinTimes().find((spinTime) => {
    return spinTime.getTime() < currentTime.getTime();
  });
  if (!previousSpinTime) {
    return getYesterdaySpin();
  }
  // if theres no previous spin time, return
  return previousSpinTime;
};
