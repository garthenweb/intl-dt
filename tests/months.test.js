const test = require('tap').test;
const fixtures = require('./fixtures');
const intlDT = require('../index');

test('get months in long words', (t) => {
  t.same(intlDT.months('en'), fixtures.en.monthsLong);
  t.end();
});

test('get months in short words', (t) => {
  t.same(intlDT.months('en', 'short'), fixtures.en.monthsShort);
  t.end();
});
