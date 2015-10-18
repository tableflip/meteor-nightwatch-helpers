var fs = require('fs')
var path = require('path')

function requireDirectory(dirPath) {
  return fs.readdirSync(path.join(__dirname, dirPath)).reduce(function (memo, file) {
    memo[file] = require(path.join(__dirname, dirPath, file))
    return memo
  }, {})
}

module.exports = requireDirectory
