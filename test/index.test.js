var deleteEeProps = require('..')
  , EventEmitter = require('events').EventEmitter
  , assert = require('assert')

describe('delete-ee-properties', function () {

  it('should omit all properties from the ee prototype', function () {
    var ee = new EventEmitter()
    ee.a = '1'
    ee.b = '2'
    assert.equal(Object.keys(deleteEeProps(ee)).length, 2)
  })

})
