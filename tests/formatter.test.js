const test = require('tap').test;
const intlDT = require('../index');

const testDate = new Date(2010, 0, 9, 8, 7, 6);

test('single year (Y)', (t) => {
  t.equal(intlDT.format(testDate, 'Y', 'en'), '2010');
  t.end();
});

test('single 2 digit year (YY)', (t) => {
  t.equal(intlDT.format(testDate, 'YY', 'en'), '10');
  t.end();
});

test('single 4 digit year (YYYY)', (t) => {
  t.equal(intlDT.format(testDate, 'YYYY', 'en'), '2010');
  t.end();
});

test('single quarter of year (Q)', (t) => {
  t.equal(intlDT.format(new Date(2010, 0, 9), 'Q', 'en'), '1');
  t.equal(intlDT.format(new Date(2010, 1, 9), 'Q', 'en'), '1');
  t.equal(intlDT.format(new Date(2010, 2, 9), 'Q', 'en'), '1');
  t.equal(intlDT.format(new Date(2010, 3, 9), 'Q', 'en'), '2');
  t.equal(intlDT.format(new Date(2010, 4, 9), 'Q', 'en'), '2');
  t.equal(intlDT.format(new Date(2010, 5, 9), 'Q', 'en'), '2');
  t.equal(intlDT.format(new Date(2010, 6, 9), 'Q', 'en'), '3');
  t.equal(intlDT.format(new Date(2010, 7, 9), 'Q', 'en'), '3');
  t.equal(intlDT.format(new Date(2010, 8, 9), 'Q', 'en'), '3');
  t.equal(intlDT.format(new Date(2010, 9, 9), 'Q', 'en'), '4');
  t.equal(intlDT.format(new Date(2010, 10, 9), 'Q', 'en'), '4');
  t.equal(intlDT.format(new Date(2010, 11, 9), 'Q', 'en'), '4');
  t.end();
});

test('single month (M)', (t) => {
  t.equal(intlDT.format(testDate, 'M', 'en'), '1');
  t.end();
});

test('single padded month (MM)', (t) => {
  t.equal(intlDT.format(testDate, 'MM', 'en'), '01');
  t.end();
});

test('single abbreviate word month (MMM)', (t) => {
  t.equal(intlDT.format(testDate, 'MMM', 'en'), 'Jan');
  t.end();
});

test('single word month (MMMM)', (t) => {
  t.equal(intlDT.format(testDate, 'MMMM', 'en'), 'January');
  t.end();
});

test('single day of month (D)', (t) => {
  t.equal(intlDT.format(testDate, 'D', 'en'), '9');
  t.end();
});

test('single padded day of month (DD)', (t) => {
  t.equal(intlDT.format(testDate, 'DD', 'en'), '09');
  t.end();
});

test('single word abbreviate day name (ddd)', (t) => {
  t.equal(intlDT.format(testDate, 'ddd', 'en'), 'Sat');
  t.end();
});

test('single word day name (dddd)', (t) => {
  t.equal(intlDT.format(testDate, 'dddd', 'en'), 'Saturday');
  t.end();
});

test('single hour (H)', (t) => {
  t.equal(intlDT.format(testDate, 'H', 'en'), '8');
  t.equal(intlDT.format(new Date(2010, 0, 9, 15), 'H', 'en'), '15');
  t.end();
});

test('single padded hour (HH)', (t) => {
  t.equal(intlDT.format(testDate, 'HH', 'en'), '08');
  t.equal(intlDT.format(new Date(2010, 0, 9, 15), 'HH', 'en'), '15');
  t.end();
});

test('single hour hour12 (h)', (t) => {
  t.equal(intlDT.format(testDate, 'h', 'en'), '8');
  t.equal(intlDT.format(new Date(2010, 0, 9, 15), 'h', 'en'), '3');
  t.end();
});

test('single hour hour12 (hh)', (t) => {
  t.equal(intlDT.format(testDate, 'hh', 'en'), '08');
  t.equal(intlDT.format(new Date(2010, 0, 9, 15), 'hh', 'en'), '03');
  t.end();
});

test('single post/ ante meridiem (a A)', (t) => {
  t.equal(intlDT.format(testDate, 'a', 'en'), 'AM');
  t.equal(intlDT.format(testDate, 'A', 'en'), 'AM');
  t.equal(intlDT.format(new Date(2010, 0, 9, 15), 'a', 'en'), 'PM');
  t.equal(intlDT.format(new Date(2010, 0, 9, 15), 'A', 'en'), 'PM');
  t.end();
});

test('single minutes (m)', (t) => {
  t.equal(intlDT.format(testDate, 'm', 'en'), '7');
  t.end();
});

test('single minutes (mm)', (t) => {
  t.equal(intlDT.format(testDate, 'mm', 'en'), '07');
  t.end();
});

test('single seconds (s)', (t) => {
  t.equal(intlDT.format(testDate, 's', 'en'), '6');
  t.end();
});

test('single seconds (ss)', (t) => {
  t.equal(intlDT.format(testDate, 'ss', 'en'), '06');
  t.end();
});

test('full time (HH:mm)', (t) => {
  t.equal(intlDT.format(testDate, 'HH:mm:ss', 'en'), '08:07:06');
  t.end();
});

test('full time (HH:mm:ss)', (t) => {
  t.equal(intlDT.format(testDate, 'HH:mm:ss', 'en'), '08:07:06');
  t.end();
});

test('full time (hh a)', (t) => {
  t.equal(intlDT.format(testDate, 'hh a', 'en'), '08 AM');
  t.end();
});

test('full date (DD.MM.YYYY)', (t) => {
  t.equal(intlDT.format(testDate, 'DD.MM.YYYY', 'en'), '09.01.2010');
  t.end();
});

test('full date (D. MMMM YYYY)', (t) => {
  t.equal(intlDT.format(testDate, 'D. MMMM YYYY', 'en'), '9. January 2010');
  t.end();
});

test('full date time (dddd, D. MMMM YYYY HH:mm)', (t) => {
  t.equal(
    intlDT.format(testDate, 'dddd, D. MMMM YYYY HH:mm', 'en'),
    'Saturday, 9. January 2010 08:07'
  );
  t.end();
});

test('convert unknown patterns', (t) => {
  t.equal(intlDT.format(testDate, 'HH:mm Uhr', 'en'), '08:07 Uhr');
  t.end();
});
