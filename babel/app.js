const age = 100;
const people = ['Wes', 'Kaik'];

const fullNames = people.map(name => `${name} Bos`);

const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }

class Foo extends mixin(Array) {}

function mixin(Super) {
  return class extends Super {
    mix() {}
  };
}