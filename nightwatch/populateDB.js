var requireDirectory = require('./require-directory')
var fixtures = requireDirectory('../fixtures')

exports.command = function() {
  var client = this
  client
    .timeoutsAsyncScript(10000)
    .executeAsync(function (data, cb) {
      Meteor.call('tests/populateDB', data, function(err, res) {
        if (err) throw new Error(err)
        cb(res)
      })
    }, [Object.keys(fixtures).map(function (key) { return fixtures[key] })], function (result) {
      client.assert.equal(result.value, true, 'Database populated')
    }).pause(1000)
    return client
}
