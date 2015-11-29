/* global describe, it */

var Yarsay = require('../src/yarsay')

require('chai').should()

describe('Yarsay', function () {
  it('defaults to riffiwobbles', function () {
    var yarsay = Yarsay()
    yarsay.message.should.include('riffiwobbles')
  })
})
