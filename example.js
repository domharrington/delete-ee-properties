var EventEmitter = require('events').EventEmitter
  , ee = new EventEmitter()
  , deleteEeProps = require('./')

ee.a = '1'
ee.b = '2'

console.log(ee)
// => { domain: null, _events: {}, _maxListeners: 10, a: '1', b: '2' }

console.log(deleteEeProps(ee))
// => { a: 1, b: 2 }
