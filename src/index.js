const formatter = require('./formatter');
const months = require('./months');
const days = require('./days');

const createIntlDT = (local) => ({
  format: (date, template) => formatter(date, template, local),
  months: (type) => months(local, type),
  days: (type) => days(local, type),
});

module.exports = createIntlDT;
module.exports.format = formatter;
module.exports.months = months;
module.exports.days = days;
