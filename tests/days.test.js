const test = require('tap').test;
const intlDays = require('../src/days');

test('get days in long words', (t) => {
  t.same(intlDays('en'), [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]);
  t.end();
});

test('get days in short words', (t) => {
  t.same(intlDays('en', 'short'), [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ]);
  t.end();
});
