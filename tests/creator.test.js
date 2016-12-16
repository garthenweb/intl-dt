const test = require('tap').test;
const intlDT = require('../index');

const testDate = new Date(2010, 0, 9, 8, 7, 6);

test('factory with date and local', (t) => {
  const intlDate = intlDT(testDate, 'en');
  t.equal(
    intlDate.format('dddd, D. MMMM YYYY HH:mm'),
    'Saturday, 9. January 2010 08:07'
  );
  t.end();
});

test('factory with local', (t) => {
  const intlDate = intlDT('en');
  t.equal(
    intlDate.format(testDate, 'dddd, D. MMMM YYYY HH:mm'),
    'Saturday, 9. January 2010 08:07'
  );
  t.end();
});

test('factory wihtout arguments', (t) => {
  const intlDate = intlDT();
  t.equal(
    intlDate.format(testDate, 'dddd, D. MMMM YYYY HH:mm', 'en'),
    'Saturday, 9. January 2010 08:07'
  );
  t.end();
});

test('factory with date', (t) => {
  const intlDate = intlDT(testDate);
  t.equal(
    intlDate.format('dddd, D. MMMM YYYY HH:mm', 'en'),
    'Saturday, 9. January 2010 08:07'
  );
  t.end();
});
