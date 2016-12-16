import formatter from './formatter';

const formats = {
  short: 'MMM',
  long: 'MMMM'
};

export default function months(locales, type = 'long') {
  const months = [];
  while (months.length !== 12) {
    months.push(formatter(new Date(2000, months.length), formats[type], locales));
  }
  return months;
}
