const test = require('tap').test;
const fixtures = require('./fixtures');
const intlDT = require('../index');

const testDate = new Date(2010, 0, 9, 8, 7, 6);

test('factory format with date and local', (t) => {
  const intlDate = intlDT(testDate, 'en');
  t.equal(
    intlDate.format('dddd, D. MMMM YYYY HH:mm'),
    'Saturday, 9. January 2010 08:07'
  );
  t.end();
});

test('factory format with local', (t) => {
  const intlDate = intlDT('en');
  t.equal(
    intlDate.format(testDate, 'dddd, D. MMMM YYYY HH:mm'),
    'Saturday, 9. January 2010 08:07'
  );
  t.end();
});

test('factory format wihtout arguments', (t) => {
  const intlDate = intlDT();
  t.equal(
    intlDate.format(testDate, 'dddd, D. MMMM YYYY HH:mm', 'en'),
    'Saturday, 9. January 2010 08:07'
  );
  t.end();
});

test('factory format with date', (t) => {
  const intlDate = intlDT(testDate);
  t.equal(
    intlDate.format('dddd, D. MMMM YYYY HH:mm', 'en'),
    'Saturday, 9. January 2010 08:07'
  );
  t.end();
});

test('factory days', (t) => {
  t.same(intlDT(testDate, 'en').days(), fixtures.en.daysLong);
  t.same(intlDT('en', testDate).days(), fixtures.en.daysLong);
  t.same(intlDT('en').days(), fixtures.en.daysLong);
  t.same(intlDT(testDate, 'en').days('short'), fixtures.en.daysShort);
  t.same(intlDT('en', testDate).days('short'), fixtures.en.daysShort);
  t.same(intlDT('en').days('short'), fixtures.en.daysShort);
  t.end();
});


test('factory motnhs', (t) => {
  t.same(intlDT(testDate, 'en').months(), fixtures.en.monthsLong);
  t.same(intlDT('en', testDate).months(), fixtures.en.monthsLong);
  t.same(intlDT('en').months(), fixtures.en.monthsLong);
  t.same(intlDT(testDate, 'en').months('short'), fixtures.en.monthsShort);
  t.same(intlDT('en', testDate).months('short'), fixtures.en.monthsShort);
  t.same(intlDT('en').months('short'), fixtures.en.monthsShort);
  t.end();
});
