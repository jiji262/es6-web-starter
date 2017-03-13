# ES6 web starter

A demo of JavaScript library made with ES6 and webpack.

## Features

* Webpack 2 based.
* ES6 as a source.
* Exports in a [umd](https://github.com/umdjs/umd) format so your library works everywhere.
* ES6 test setup with [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/).
* Linting with [ESLint](http://eslint.org/).

## Introduction

This is just a small demo, which implement a tiny JavaScript library, which can convert an ip address to an integer.

![]("./es6start.gif")

You can build this library like this:
```shell
npm run build
```
And test it:
```shell
➜  es6-web-starter git:(master) ✗ npm run test

> mocha --compilers js:babel-core/register --colors ./test/*.spec.js
  Test ip address to interger function
    Test normal ip address
      ✓ "0.0.0.0"=>0
      ✓ "127.0.0.1"=>2130706433
      ✓ "172.168.5.1"=>2896692481
      ✓ "127.255.255.255"=>2147483647
      ✓ "255.255.255.255"=>4294967295
    Test ip address with spaces near dot
      ✓ "0. 0.0 .0"=>0
      ✓ "127. 0 .0.1"=>2130706433
      ✓ "172. 168.5. 1"=>2896692481
      ✓ " 127 . 255 . 255 .  255"=>2147483647
      ✓ "255  . 255. 255   .255 "=>4294967295
    Test ip address with spaces in number
      ✓ "12 7.0.0.1"=>-1
      ✓ "172.1 68. 5.1"=>-1
    Test ip address with negtive sign
      ✓ "0.-0.0.0"=>-1
      ✓ "-127.0.0.1"=>-1
      ✓ "172.-168.5.1"=>-1
      ✓ "127.255.-255.255"=>-1
      ✓ "255.255.255.-255"=>-1
    Test ip address with invalid letters
      ✓ "0.ab.0.0"=>-1
      ✓ "@127.0.0.1"=>-1
      ✓ "172.1q68.5.1"=>-1


  20 passing (39ms)
```

## Scripts

* `npm run build` - produces production version of the library under the `lib` folder
* `npm run dev` - produces development version of the library and runs a watcher
* `npm run test` - well ... it runs the tests :)
* `npm run test:watch` - same as above but in a watch mode
