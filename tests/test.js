import { equal } from 'assert';
import reassembleString from '../';

test('#reassembleString', () => {
  const camelize = reassembleString((a, b) => a + b.toUpperCase());
  const dasherize = reassembleString((a, b) => `${a}-${b.toLowerCase()}`);

  equal(camelize('hello-world'), 'helloWorld');
  equal(camelize('hello_world'), 'helloWorld');
  equal(camelize('hello - world'), 'helloWorld');
  equal(camelize('hello.world'), 'helloWorld');
  equal(camelize('hello + world'), 'hello + world');
  equal(dasherize('helloWorld'), 'hello-world');
  equal(dasherize('hello  world'), 'hello-world');

  equal(reassembleString((a, b) => `${a}*${b}`, 'helloWorld'), 'hello*World');
});;
