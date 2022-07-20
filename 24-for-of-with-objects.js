const apple = {
    color: 'Red',
    size: 'Medium',
    weight: 50,
    sugar: 10,
};

// Plain Object不是Iterable，所以這段程式會出錯
// for (const prop of apple) {
//     console.log(prop);
// }
// Uncaught TypeError: apple is not iterable

// 但是有辦法讓Object變成Iterable：使用ES7語法
// for (const prop of Object.entries(apple)) {
//     console.log(prop);
// }

for (const [key, value] of Object.entries(apple)) {
    console.log(key, value);
}

// 或是也可以使用Object.keys
console.log(Object.keys(apple)); // ['color', 'size', 'weight', 'sugar']

for (const prop of Object.keys(apple)) {
    const value = apple[prop];
    console.log(prop, value);
}

// ES6以前的舊方法 for...in
for (const prop in apple) {
    const value = apple[prop];
    console.log(value, prop);
}
