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

intlDT.months('en')[0]
// January
intlDT.months('de')[0]
// Januar

intlDT.days('en')[0]
// Monday
intlDT.days('de')[0]
// Montag
```

## API

### `intlDT.format`

Uses a given date and transformes it by a given template into a localized string.

```
intlDT.format(date, template[, locales])
intlDT([date[, locales]]).format(template[, locales])
intlDT([locales]).format(date, template[, locales])
```

### `intlDT.months`

Returns a localized array of all months.

```
intlDT.months([locales, [type]])
intlDT([locales]).months([type])
intlDT([date[, locales]]).months([type])
```

### `intlDT.days`

Returns a localized array of all days of the week.

```
intlDT.days([locales, [type]])
intlDT([locales]).days([type])
intlDT([date[, locales]]).days([type])
```

## Parameters

### `date: Date`

A valid [JavaScript date object](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date).

### `locales: String`

A valid [locales argument](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

Locales are always optional. If not provided the system default local is used.

_At the moment only strings are supported._

### `template: String`

A template string defining a template a date may be formated into.
The following table defines the valid template tags.

| Input         | Example    | Description |
|---------------|------------|-------------|
| `YY`          | `16`       | Last two digits of a year |
| `YYYY` or `Y` | `2016`     | Full digits of a year |
| `M`           | `2`, `12`  | Month as digits |
| `MM`          | `02`, `12` | Month as digits with leading zero |
| `MMM`         | `Jan`      | Month as word in short form |
| `MMMM`        | `January`  | Month as word in long form |
| `Q`           | `4`        | Number of quarter |
| `D`           | `1`, `28`  | Day of month as digits |
| `DD`          | `01`, `28` | Day of month as digits with leading zero |
| `ddd`         | `Mon`      | Day of week as word in short form |
| `dddd`        | `Monday`   | Day of week as word in long form |
| `H`           | `6`, `1`   | 12 hour time |
| `HH`          | `06`, `01` | 12 hour time with leading zero |
| `h`           | `6`, `13`  | 24 hour time |
| `hh`          | `06`, `13` | 24 hour time with leading zero |
| `a` or `A`    | `am`, `pm` | Ante or post meridiem |
| `m`           | `6`, `56`  | Minutes |
| `mm`          | `06`, `56` | Minutes with leading zero |
| `s`           | `6`, `56`  | Seconds |
| `ss`          | `06`, `56` | Seconds with leading zero |

### `type: String`

Defines the type of the return value. Default value is `long`.

Valid types are

* `long` converts to tag `MMMM`
* `short` converts to tag `MMM`  


## License

Licensed under the [MIT License](https://opensource.org/licenses/mit-license.php).

[1]: https://travis-ci.org/garthenweb/intl-dt.svg
[2]: https://travis-ci.org/garthenweb/intl-dt
[3]: https://coveralls.io/repos/github/garthenweb/intl-dt/badge.svg?branch=master
[4]: https://coveralls.io/github/garthenweb/intl-dt?branch=master
