if (typeof GLOBAL.Promise === 'undefined') GLOBAL.Promise = require('bluebird')

var Yarsay = require('./yarsay')
var argv = require('yargs')
  .usage('$0 <msg>\necho <msg> | $0')
  .version(require('../package.json').version, 'v')
  .help('h')
  .alias('help', 'h')
  .alias('v', 'version')
  .example('$0 "Hello Joe"')
  .example('echo "Hello Joe" | $0')
  .argv
const getStdin = require('get-stdin')

getStdin().then(str => {
  var yarsay = null

  if (str) yarsay = Yarsay(str)
  else if (argv._.length) yarsay = Yarsay(argv._.join(' '))
  else yarsay = Yarsay()

  yarsay.say()
})
