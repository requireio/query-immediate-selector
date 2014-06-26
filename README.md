# query-immediate-selector

## Select direct children of element that match a selector.

Only selects direct children, not grandchildren. Like `body.querySelector('el > selector')` but for the case you already have a reference to an element.

## Why

Ideally, you could do this with web standards like `el.querySelector('> selector')` or `el.querySelector(':root > selector')` or something. But this does not exist cross-browser AFAIK.

## Usage
### querySelector

```js
var qis = require('query-immediate-selector')
var el = document.getElementById('my-element')

var div = qis(el, 'div') // get first child of el matching 'div'
```

### querySelectorAll
```js
var qis = require('query-immediate-selector')
var el = document.getElementById('my-element')

var divs = qis.all(el, 'div') // get all childs of el matching 'div'
```

## Currying

For convenience, you can call `qis` with no selector, you get back a function bound to that el. You can use this to call querySelector or querySelectorAll:

```js
var $ = qis(el)
$('div') // get first child of el matching 'div'
$.all('div') // get all childs of el matching 'div'
```

## License

MIT
