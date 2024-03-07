/**Add seconds to date */
/**
 * So in summary, it takes a Date and number of seconds, makes a copy of the original Date, shifts its internal timestamp by the given number of seconds, and returns the updated Date. This provides a simple way to shift a Date forwards or backwards by a specific number of seconds.
 * @param {*} date :  The Date object you want to modify.
 * @param {*} n :  The number of seconds to add (if positive) or subtract (if negative) from the date
 * @returns : a new Date object with the time shifted by n seconds
 */
const addSecondsToDate = (date, n) => {
  const d = new Date(date);
  d.setTime(d.getTime() + n * 1000);
  return d;
};

addSecondsToDate(new Date("2020-10-19 12:00:00"), 10);
// 2020-10-19 12:00:10
addSecondsToDate(new Date("2020-10-19 12:00:00"), -10);
// 2020-10-19 11:59:50

/**Add Minutes to date */
const addMinutesToDate = (date, n) => {
  const d = new Date(date);
  d.setTime(d.getTime() + n * 60_000);
  return d;
};

addMinutesToDate("2020-10-19 12:00:00", 10);
// 2020-10-19 12:10:00
addMinutesToDate("2020-10-19 12:00:00", -10);
// 2020-10-19 11:50:00

/**Add hours to date */
const addHoursToDate = (date, n) => {
  const d = new Date(date);
  d.setTime(d.getTime() + n * 3_600_000);
  return d;
};

addHoursToDate('2020-10-19 12:00:00', 10);
// 2020-10-19 22:00:00
addHoursToDate('2020-10-19 12:00:00', -10);
// 2020-10-19 02:00:00

/**Add days to date */
const addDaysToDate = (date, n) => {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
};

addDaysToDate('2020-10-15', 10);
// 2020-10-25
addDaysToDate('2020-10-15', -10);
// 2020-10-05