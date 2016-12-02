# intl-dt [![build status][1]][2] [![Coverage Status][3]][4]

Light date time library based on the ECMA-402 Internationalization API.
It allows to use localized date time formats without the need to import a language package.

## Installation

``` bash
npm install --save intl-dt
```

## Usage

``` javascript
const intlDT = require('intl-dt');

const date = new Date(2010, 0, 9, 8, 7, 6);
intlDT.format(date, 'dddd, D. MMMM YYYY HH:mm:ss', 'en');
// Saturday, 9. January 2010 08:07:06
intlDT.format(date, 'dddd, D. MMMM YYYY HH:mm:ss', 'de');
// Samstag, 9. Januar 2010 08:07:06
```

## License

Licensed under the [MIT License](https://opensource.org/licenses/mit-license.php).

[1]: https://travis-ci.org/garthenweb/intl-dt.svg
[2]: https://travis-ci.org/garthenweb/intl-dt
[3]: https://coveralls.io/repos/github/garthenweb/intl-dt/badge.svg?branch=master
[4]: https://coveralls.io/github/garthenweb/intl-dt?branch=master
