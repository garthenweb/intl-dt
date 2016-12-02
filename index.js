const formatter = require('./src/formatter');
const months = require('./src/months');
const days = require('./src/days');

const createIntlDT = (local) => {
  format: (date, template) => formatter(date, template, local),
  months: () => months(local),
  days: () => days(local),
};

module.exports = createIntlDT;
module.exports.format = formatter;
module.exports.months = months;
module.exports.days = days;
