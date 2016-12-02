export { default as format } from './formatter';
export { default as months } from './months';
export { default as days } from './days';

const createIntlDT = (local) => ({
  format: (date, template) => format(date, template, local),
  months: (type) => months(local, type),
  days: (type) => days(local, type),
});

export default createIntlDT;
