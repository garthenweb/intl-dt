const formatter = require('./formatter');

const formats = {
  short: 'MMM',
  long: 'MMMM'
};

module.exports = (local, type = 'long') => {
  const months = [];
  while (months.length !== 12) {
    months.push(formatter(new Date(2000, months.length), formats[type], local));
  }
  return months;
}
