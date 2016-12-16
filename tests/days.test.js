const test = require('tap').test;
const fixtures = require('./fixtures');
const intlDT = require('../index');

test('get days in long words', (t) => {
  t.same(intlDT.days('en'), fixtures.en.daysLong);
  t.end();
});

test('get days in short words', (t) => {
  t.same(intlDT.days('en', 'short'), fixtures.en.daysShort);
  t.end();
});
