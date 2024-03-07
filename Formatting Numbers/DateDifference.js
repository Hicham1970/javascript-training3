/**Difference in Seconds */
const dateDifferenceInSeconds = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / 1_000;

let dif = dateDifferenceInSeconds(
  new Date("2019-12-24 00:00:15"),
  new Date("2020-12-24 00:00:17")
);
console.log(dif); // 31622402 seconds

/**Date difference in minutes */
const dateDifferenceInMinutes = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / 60_000;

let mi = dateDifferenceInMinutes(
  new Date("2021-04-24 01:00:15"),
  new Date("2021-04-24 02:00:15")
);
console.log(mi);

/**Date difference in hours */
const dateDifferenceInHours = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / 3_600_000;

let hr = dateDifferenceInHours(
  new Date("2021-04-24 10:25:00"),
  new Date("2021-04-25 10:27:20")
);
console.log("The difference in hours is : " + hr);

/**Date difference in days */
const dateDifferenceInDays = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / 86_400_000;

let days = dateDifferenceInDays(new Date("2012-12-13"), new Date("2017-12-22"));
console.log("Days :   " + days);

/**Date difference in months */
const dateDifferenceInMonths = (dateInitial, dateFinal) =>
  Math.max(
    (dateFinal.getFullYear() - dateInitial.getFullYear()) * 12 +
      dateFinal.getMonth() -
      dateInitial.getMonth(),
    0
  );

let month = dateDifferenceInMonths(
  new Date("2017-12-13"),
  new Date("2018-04-29")
);
console.log(month);

/**Date difference in years */
const dateDifferenceInYears = (dateInitial, dateFinal) =>
  dateDifferenceInMonths(dateInitial, dateFinal) / 12;

dateDifferenceInYears(
  new Date('2017-12-13'),
  new Date('2019-12-15')
); // 2
