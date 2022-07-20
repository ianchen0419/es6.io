const brunch = new Set();
// as people start coming in
brunch.add('Wes');
brunch.add('Sarah');
brunch.add('Simon');
// ready to open!
const line = brunch.values();
console.log(line.next().value); // Wes
console.log(line.next().value); // Sarah
console.log(brunch); // Set(3) {'Wes', 'Sarah', 'Simon'}

brunch.add('Heather');
brunch.add('Snickers');
console.log(line.next().value); // Simon
console.log(line.next().value); // Heather
console.log(line.next().value); // Snickers
