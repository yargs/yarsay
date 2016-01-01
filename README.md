# Yarsay

> Hello Joe! tell Pirate Joe what to say.

Inspired by [yosay](https://github.com/yeoman/yosay), which was in turn inspired by [cowsay](https://en.wikipedia.org/wiki/Cowsay).

[![Build Status](https://travis-ci.org/yargs/yarsay.svg)](https://travis-ci.org/yargs/yarsay)
[![Coverage Status](https://coveralls.io/repos/yargs/yarsay/badge.svg?branch=)](https://coveralls.io/r/yargs/yarsay?branch=)
[![NPM version](https://img.shields.io/npm/v/yarsay.svg)](https://www.npmjs.com/package/yarsay)

<img width="500" src="screen.png">

## Usage

```sh
yarsay "Hello World!"
```

Or,

```sh
echo "Hello World" | yarsay
```

Or,

```js
var yarsay = require('./lib/yarsay')
yarsay('Hello World!').say()
```

## License

ISC
