const test = require('tap').test;
const intlDT = require('../index');

test('get days in long words', (t) => {
  t.same(intlDT.days('en'), [
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
  t.same(intlDT.days('en', 'short'), [
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
