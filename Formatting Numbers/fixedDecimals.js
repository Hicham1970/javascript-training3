/**Fixed-point notation without trailing zeros */
const toOptionalFixed = (num, digits) =>
  `${Number.parseFloat(num.toFixed(digits))}`;

console.log(toOptionalFixed(1, 2)); // '1'
console.log(toOptionalFixed(1.001, 2)); // '1'
console.log(toOptionalFixed(1.5, 2)); // '1.5'
console.log(toOptionalFixed(1.563, 1)); // "1.6"
/**
 * Round number to given precision:*/
const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

console.log(round(1.035, 2)); // 1

/**Format duration:
 * Converting a number of milliseconds to a human-readable format is a matter of dividing the number by the appropriate values and creating a string for each value. In the following snippet, we'll use an object that contains the appropriate values for day, hour, minute, second, and millisecond, but you can easily adapt it to different needs.
We can use Object.entries() with Array.prototype.filter() to keep only non-zero values. Then, we can use Array.prototype.map() to create the string for each value, pluralizing appropriately. Finally, we can use Array.prototype.join() to combine the values into a string.
 */
const formatDuration = (ms) => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86_400_000),
    hour: Math.floor(ms / 3_600_000) % 24,
    minute: Math.floor(ms / 60_000) % 60,
    second: Math.floor(ms / 1_000) % 60,
    millisecond: Math.floor(ms) % 1_000,
  };
  return Object.entries(time)
    .filter((val) => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
    .join(", ");
};

console.log(formatDuration(1_001));
// '1 second, 1 millisecond'
console.log(formatDuration(34_325_055_574));
// '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'

/**Number of seconds to ISO format: */
const formatSeconds = (s) => {
  const [hour, minute, second, sign] =
    s > 0
      ? [s / 3_600, (s / 60) % 60, s % 60, ""]
      : [-s / 3_600, (-s / 60) % 60, -s % 60, "-"];

  return (
    sign +
    [hour, minute, second]
      .map((v) => `${Math.floor(v)}`.padStart(2, "0"))
      .join(":")
  );
};

console.log(formatSeconds(-200)); // '-00:03:20'
console.log(formatSeconds(200)); // '00:03:20'
console.log(formatSeconds(99_999)); // '27:46:39'

/**Locale-sensitive number formatting */
const formatNumber = (num) => num.toLocaleString();

formatNumber(123_456); // '123,456' in `en-US`
formatNumber(15_675_436_903); // '15.675.436.903' in `de-DE`

/**Number to decimal mark */
const toDecimalMark = (num) => num.toLocaleString("en-US");

toDecimalMark(12_305_030_388.9087); // '12,305,030,388.909'

/**Number to currency string */
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, {
    style: "currency",
    currency: curr,
  }).format(n);

console.log(toCurrency(123_456.789, "EUR"));
// €123,456.79  | currency: Euro | currencyLangFormat: Local
console.log(toCurrency(123_456.789, "USD", "en-us"));
// $123,456.79  | currency: US Dollar | currencyLangFormat: English (USA)
console.log(toCurrency(123_456.789, "USD", "fa"));
// ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
console.log(toCurrency(322_342_436_423.2435, "JPY"));
// ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
console.log(toCurrency(322_342_436_423.2435, "JPY", "fi"));
// 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish

/**Number to ordinal suffix */
const ordinalsEnUS = {
  one: "st",
  two: "nd",
  few: "rd",
  many: "th",
  zero: "th",
  other: "th",
};

const toOrdinalSuffix = (num, locale = "en-US", ordinals = ordinalsEnUS) => {
  const pluralRules = new Intl.PluralRules(locale, { type: "ordinal" });
  return `${num}${ordinals[pluralRules.select(num)]}`;
};

toOrdinalSuffix(1); // '1st'
toOrdinalSuffix(2); // '2nd'
toOrdinalSuffix(3); // '3rd'
toOrdinalSuffix(4); // '4th'
toOrdinalSuffix(123); // '123rd'

/**Pad number with leading zeros */
const padNumber = (n, l) => `${n}`.padStart(l, "0");

console.log(padNumber(1_234, 6)); // '001234'
