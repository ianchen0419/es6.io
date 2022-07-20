// ES6 Class
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log(`Wow Wow! My name is ${this.name}`);
    }

    cuddle() {
        console.log(`I love you owner!`);
    }

    // Static Method
    static info() {
        console.log('A dog is better than a cat by 10 times');
    }

    // getter：類似Computed Variable
    get description() {
        return `${this.name} is a ${this.breed} type of dog`;
    }

    // setter
    set nicknames(value) {
        this.nick = value.trim();
    }
    get nicknames() {
        return this.nick.toUpperCase();
    }
}

// constructor function
// function Dog(name, breed) {
//     this.name = name;
//     this.breed = breed;
// }

// Dog.prototype.bark = function () {
//     console.log(`Bark Bark! My name is ${this.name}`);
// };

const snickers = new Dog('Snickers', 'King Charles');
const sunny = new Dog('Sunny', 'Golden Doodle');

// Static Method是只有存在物件本身的函式
// 例如：Array.of，Array.of可以這樣寫`Array.of(1,2,3)，但是不能這樣寫`[a,b,c].of(1,2,3)`
// 這種只能用在物件型別上的叫Static Method

// sunny.info(); // dont' work
Dog.info(); // A dog is better than a cat by 10 times

// Getter
console.log(snickers.description); // 'Snickers is a King Charles type of dog'

// Setter
snickers.nicknames = '      snicky  ';
console.log(snickers.nicknames);
