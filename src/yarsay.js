var chalk = require('chalk')
var fs = require('fs')
var ws = require('window-size')
var ui = require('cliui')({
  width: Math.min(ws.width || 60, 60)
})

class Yarsay {
  constructor (msg = "maybe if we ask nicely, they'll just give us their riffiwobbles!" + chalk.bold(' --Pirate Joe, the eternal optimist...')) {
    var joe = fs.readFileSync('./joe.txt', 'utf-8')

    // the layout engine treats Joe as one
    // giant pirate-shaped word.
    joe = joe.replace(/ /g, '_')

    ui.div({
      text: joe.split('\n').join(''),
      width: 35,
      padding: [0, 0, 0, 0]
    }, {
      text: msg,
      border: true,
      padding: [3, 0, 0, 0]
    })

    this.message = ui.toString().replace(/_/g, ' ')
  }

  say () {
    console.log(this.message)
  }
}

module.exports = function (msg) {
  return new Yarsay(msg)
}
