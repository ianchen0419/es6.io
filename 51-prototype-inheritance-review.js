// constructor function
function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
}

Dog.prototype.bark = function () {
    console.log(`Bark Bark! My name is ${this.name}`);
};

const snickers = new Dog('Snickers', 'King Charles');
const sunny = new Dog('Sunny', 'Golden Doodle');

// Prototype Method：如果對Dog加了一個函式，這個函式會被底下所有成員繼承

// Prototype可以覆蓋掉舊的
Dog.prototype.bark = function () {
    console.log(`Wow Wow! My name is ${this.name}`);
};

Dog.prototype.cuddle = function () {
    console.log(`I love you owner!`);
};
