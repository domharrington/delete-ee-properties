module.exports = deleteEeProps

var EventEmitter = require('events').EventEmitter

function deleteEeProps(ee) {

  for (var i in new EventEmitter()) {
    delete ee[i]
  }

  return ee
}
