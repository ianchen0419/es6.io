// Set：裡面的東西不會重複

const people = new Set();
people.add('Wes');
people.add('Snickers');
people.add('Kait');

// people.size // 3
// people.delete('Wes');
// people.clear()

people.values(); // SetIterator {'Wes', 'Snickers', 'Kait'}
// SetIterator，表示可以被loop
const it = people.values();
it.next();
it.next();
it.next();
it.next();

for (const person of people) {
    console.log(person);
}

people.keys(); // SetIterator {'Wes', 'Snickers', 'Kait'}
people.entries(); // SetIterator {'Wes' => 'Wes', 'Snickers' => 'Snickers', 'Kait' => 'Kait'}

const students = new Set(['Wes', 'Kara', 'Tony']);

const dogs = ['Snickers', 'Sunny'];
const dogSet = new Set(dogs);

students.has('Tony'); // true
students.has('Wessssss'); // false

// Set就算重複家同一個人也不會重複
// students[1] // error
