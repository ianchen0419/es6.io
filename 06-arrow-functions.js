// Arrow Function

const names = ['we', 'kait', 'lux'];

const fullNames = names.map(function (name) {
    return `${name} bos`;
});

const fullNames2 = names.map((name) => {
    return `${name} bos`;
});

const fullNames3 = names.map((name) => {
    return `${name} bos`; // explicit return
});

const fullNames4 = names.map((name) => `${name} bos`); // implicit return

const fullNames5 = names.map(() => `cool bos`);

// Arrow Function是Anonymous Function（匿名函式）

// Named Function，出錯時尋找會很容易（Stack Trace）
function sayMyName1(name) {
    console.log(`Hello ${name}`);
}

// Anonymous Function
const sayMyName2 = (name) => {
    console.log(`Hello ${name}`);
};

sayMyName2('Wes');

console.log(fullNames4);
