# delete-ee-properties

Deletes the properties from an EventEmitter and returns the resulting object.

[![build status](https://secure.travis-ci.org/domharrington/delete-ee-properties.png)](http://travis-ci.org/domharrington/delete-ee-properties)

## Installation

```
npm install delete-ee-properties --save
```

## Usage

```js
var EventEmitter = require('events').EventEmitter
  , ee = new EventEmitter()
  , deleteEeProps = require('./')

ee.a = '1'
ee.b = '2'

console.log(ee)
// => { domain: null, _events: {}, _maxListeners: 10, a: '1', b: '2' }

console.log(deleteEeProps(ee))
// => { a: 1, b: 2 }
```

## Credits
[Dom Harrington](https://github.com/domharrington/)
