import { equal, throws } from 'assert';
import reassembleString from '../';

test('#reassembleString', () => {
  const camelize = reassembleString((a, b) => a + b.toUpperCase());
  const dasherize = reassembleString((a, b) => `${a}-${b}`);
	const pipify = reassembleString((a, b) => `${a}|${b}`);

  equal(camelize(''), '');
  equal(camelize('  '), '');
  equal(camelize('a'), 'a');
  equal(camelize('a a'), 'aA');
  equal(camelize('  a a  '), 'aA');
  equal(camelize('hello-world'), 'helloWorld');
  equal(camelize('hello_world'), 'helloWorld');
  equal(camelize('Hello_world'), 'HelloWorld');
  equal(camelize(' - Hello_world - '), 'HelloWorld');
  equal(camelize('hello_'), 'hello');
  equal(camelize('_world'), 'world');
  equal(camelize('-_world'), 'world');
  equal(camelize('hello - world'), 'helloWorld');
  equal(camelize('hello.world'), 'helloWorld');
  equal(camelize('hello + world'), 'hello + world');
  equal(dasherize('helloWorld'), 'hello-world');
  equal(dasherize('hello  world'), 'hello-world');

  equal(reassembleString((a, b) => `${a}*${b}`, 'helloWorld'), 'hello*world');


  equal(pipify('hello World'), 'hello|world');
  equal(pipify('hello-World'), 'hello|world');
  equal(pipify('hello_World'), 'hello|world');
  equal(pipify('hello.World'), 'hello|world');
  equal(pipify('helloWorld'), 'hello|world');

  throws(camelize.bind(null, undefined), TypeError);
  throws(camelize.bind(null, 1), TypeError);
  throws(camelize.bind(null, null), TypeError);
});;
