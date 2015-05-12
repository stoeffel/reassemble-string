const REGEX = /(\w[_\-\s\.]+\w|[a-z][A-Z])/g;

const clean = str => str.replace(/(^[_\-\s\.]+|[_\-\s\.]+$)/, '');
const firstChar = (str) => str.slice(0, 1);
const lastChar = (str) => str.slice(-1);

const reassembleString = (combine, str) => clean(str).replace(REGEX, sub => combine(firstChar(sub), lastChar(sub)));

export default (combine, str) =>
	str ?
		reassembleString(combine, str):
		(str) => reassembleString(combine, str);

