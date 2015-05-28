[![Coverage Status](https://coveralls.io/repos/stoeffel/reassemble-string/badge.svg?branch=master)](https://coveralls.io/r/stoeffel/reassemble-string?branch=master)
[![Build Status](https://travis-ci.org/stoeffel/reassemble-string.svg?branch=master)](https://travis-ci.org/stoeffel/reassemble-string)
[![Dependency Status](https://david-dm.org/stoeffel/reassemble-string.svg)](https://david-dm.org/stoeffel/reassemble-string)
[![npm version](https://badge.fury.io/js/reassemble-string.svg)](http://badge.fury.io/js/reassemble-string)
[![Stability: stable](https://img.shields.io/badge/stability-stable-green.svg)](https://nodejs.org/api/documentation.html#documentation_stability_index)

> Splits a string (Splitchars: _, -, \s, ., or camelcase) and combines it using a combound function. This is usefull to create functions like `camelize`, `dasherize`...


## Install

```
$ npm install --save reassemble-string
```


## Usage

```js
var reassembleString = require('reassemble-string');

const camelize = reassembleString((a, b) => a + b.toUpperCase());
const dasherize = reassembleString((a, b) => `${a}-${b}`);

camelize('hello-world');   // => "helloWorld"
camelize('hello_world');   // => "helloWorld"
camelize('hello.world');   // => "helloWorld"
camelize('hello - world'); // => "helloWorld"
camelize('hello + world'); // => "hello + world"
dasherize('hello world'); // => "hello-world"
dasherize('helloWorld'); // => "hello-World"
```


## API

### reassembleString(combine) -> (string) 
### reassembleString(combine, string)

#### combine

*Required*  
Type: `function(a, b)`

`a` is the last character of the previous word.
`b` is the first character of the next word.

You should return a string.


#### string

Type: `string`  

The string which gets splitted and reassembled.


## License

MIT © [Christoph Hermann](http://schtoeffel.ch)
