const REGEX = /(\w[_\-\s\.]+\w|[a-z][A-Z])/g;
const clean = str => str.replace(/(^[_\-\s\.]+|[_\-\s\.]+$)/g, '');
const firstChar = str => str.slice(0, 1);
const lastChar = str => str.slice(-1);
const throwTypeError = str => { throw new TypeError(str + ' must be a string') };
const isString = str => typeof str !== 'string';

const reassembleString = (combine, str) =>
	isString(str) ?
	  throwTypeError(str):
		clean(str)
			.replace(REGEX, sub => combine(firstChar(sub), lastChar(sub)));

export default (combine, str) =>
	!str ?
		str => reassembleString(combine, str):
		reassembleString(combine, str);

