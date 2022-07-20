// ES6物件的省略與法

const first = 'snickers';
const last = 'bos';
const age = 2;
const breed = 'King Charles Cav';

// 1) 傳統定義物件方式
// const dog = {
//     first: first,
//     last: last,
//     age: age,
//     breed: breed,
// }

// 如果key跟value一樣的話，ES6可以省略成這樣
// const dog = {
//     first,
//     last,
//     age,
//     breed,
// };

// 也可以依照自己需求rename key名稱，或是增加新的屬性
const dog = {
    firstName: first,
    last,
    age,
    breed,
    pals: ['Hugo', 'Sunny'],
};

// 2) 傳統定義method的方式
// const modal = {
//     create: function(selector) {},
//     open: function() {},
//     close: function() {}
// }

// ES6可以省略function跟冒號
const modal = {
    create(selector) {},
    open() {},
    close() {},
};

// 3) Computer Property

function invertColor(color) {
    return (
        '#' +
        (
            '000000' +
            (0xffffff ^ parseInt(color.substring(1), 16)).toString(16)
        ).slice(-6)
    );
}

const key = 'pocketColor';
const value = '#ffc600';

// 如果要增加對比色屬性
const tShirt = {
    [key]: value,
    [`${key}Opposite`]: invertColor(value),
};

// ES6以前的早期做法
// tShirt[key]: value;
// tShirt[`${key}Opposite`]: invertColor(value)

const keys = ['size', 'color', 'weight'];
const values = ['medium', 'red', 100];

const shirt = {
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
};
console.log(shirt); // {size: 'medium', color: 'red', weight: 100}
