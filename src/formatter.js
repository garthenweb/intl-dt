const getLocal = (date, locales, options) => (
  new Intl.DateTimeFormat(locales, options).format(date)
);
const get = (date, getter) => (
  date[`get${getter[0].toUpperCase()}${getter.substring(1)}`]()
);
const pad2Digits = (num) => (
  String(num).length >= 2 ? String(num) : `0${num}`
);
const getDayPeriod = str => (
  str.replace(/\d/g, '').trim()
);
const splitDayPerid = str => (
  str.replace(/\D/g, '').trim()
);

// words with 1 to 4 chars
const formatRegExp = /\b\w\w{0,3}\b/g;

export default function formatter(date, template, locales) {
  return String(template).replace(formatRegExp, function(part) {
    switch(part) {
      case 'YY':
        return String(get(date, 'fullYear')).substring(2);
      case 'Y':
      case 'YYYY':
        return String(get(date, 'fullYear'));
      case 'M':
        return String(get(date, 'month') + 1);
      case 'MM':
        return pad2Digits(get(date, 'month') + 1);
      case 'MMM':
        return getLocal(date, locales, { month: 'short' });
      case 'MMMM':
        return getLocal(date, locales, { month: 'long' });
      case 'Q':
        return Math.floor(get(date, 'month') / 3) + 1;
      case 'D':
        return get(date, 'date');
      case 'DD':
        return pad2Digits(get(date, 'date'));
      case 'ddd':
        return getLocal(date, locales, { weekday: 'short' });
      case 'dddd':
        return getLocal(date, locales, { weekday: 'long' });
      case 'H':
        return String(get(date, 'hours'));
      case 'HH':
        return pad2Digits(get(date, 'hours'));
      case 'h':
        return splitDayPerid(getLocal(date, locales, { hour: 'numeric', hour12: true }));
      case 'hh':
        return pad2Digits(splitDayPerid(getLocal(date, locales, { hour: 'numeric', hour12: true })));
      case 'a':
      case 'A':
        return getDayPeriod(getLocal(date, locales, { hour: 'numeric', hour12: true }));
      case 'm':
        return String(get(date, 'minutes'));
      case 'mm':
        return pad2Digits(get(date, 'minutes'));
      case 's':
        return String(get(date, 'seconds'));
      case 'ss':
        return pad2Digits(get(date, 'seconds'));
      default:
        return part;
    }
  });
}
