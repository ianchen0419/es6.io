// Extend

class Animal {
    constructor(name) {
        this.name = name;
        this.thirst = 100;
        this.belly = [];
    }

    drink() {
        this.thirst -= 10;
        return this.thirst;
    }

    eat(food) {
        this.belly.push(food);
        return this.belly;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        // 需要先建立Animal，在建立Dog
        super(name); //效果等於建立Animal()

        // 如果沒有寫super的話，this會變成undefined
        // this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log("Bark bark I'm a dog.");
    }
}

const rhino = new Animal('Rhiney');
const snickers = new Dog('Snickers', 'King Charles');

rhino.eat('burger');
rhino.eat('leaves');
rhino.eat('Zeebra');
rhino.drink();
rhino.drink();
rhino.drink();
