const test = require('tap').test;
const intlMonths = require('../src/months');

test('get months in long words', (t) => {
  t.same(intlMonths('en'), [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]);
  t.end();
});

test('get months in short words', (t) => {
  t.same(intlMonths('en', 'short'), [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]);
  t.end();
});
