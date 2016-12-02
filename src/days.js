const formatter = require('./formatter');

const formats = {
  short: 'ddd',
  long: 'dddd'
};

module.exports = (local, type = 'long') => {
  const days = [];
  while (days.length !== 7) {
    // the 1. October 2012 on Monday...
    days.push(formatter(new Date(2012, 9, days.length + 1), formats[type], local));
  }
  return days;
}