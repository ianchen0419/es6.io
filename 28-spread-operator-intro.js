// Spread Operator
// Spread Operator從一個可以迭代（Iterable）的元素中拿出每個元素

const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

// 想要一個陣列裡面可以有featured跟specialty的東西
// ES6以前可以用.concat()
const pizzas = featured.concat(specialty);
console.log(pizzas); // ['Deep Dish', 'Pepperoni', 'Hawaiian', 'Meatzza', 'Spicy Mama', 'Margherita']

// 如果是想要featured+specialty+自訂品項，則可以這樣寫（很冗長）
let pizzas2 = [];
pizzas2 = pizzas2.concat(featured);
pizzas2.push('veg');
pizzas2 = pizzas2.concat(specialty);

// 因為String展開之後會是每個單獨的字元
console.log([...'wes']); // ['w', 'e', 's']

// 所以可以用ES6的Spread解決這個問題，展開指定的Array，然後填到新的Array裡面去
let pizzas3 = [...featured, 'veg', ...specialty];

// 以前的Array Copy會有Shallow Copy的問題
// const fridayPizzas = pizzas; // 不是真的拷貝，只是參照了pizza的位置
// fridayPizzas[0] = 'Canada Pie';
// console.log(fridayPizzas); // ['Canada Pie', 'Pepperoni', 'Hawaiian', 'Meatzza', 'Spicy Mama', 'Margherita']
// console.log(pizzas); // ['Canada Pie', 'Pepperoni', 'Hawaiian', 'Meatzza', 'Spicy Mama', 'Margherita']

// 解決辦法是使用[].contact()，但是語法沒有很乾淨
// const fridayPizzas = [].concat(pizzas); // 不是真的拷貝，只是參照了pizza的位置
// fridayPizzas[0] = 'Canada Pie';
// console.log(fridayPizzas); // ['Canada Pie', 'Pepperoni', 'Hawaiian', 'Meatzza', 'Spicy Mama', 'Margherita']
// console.log(pizzas); // ['Deep Dish', 'Pepperoni', 'Hawaiian', 'Meatzza', 'Spicy Mama', 'Margherita']

//可以用ES6 Spread Operator，語法乾淨很多
const fridayPizzas = [...pizzas]; // 不是真的拷貝，只是參照了pizza的位置
fridayPizzas[0] = 'Canada Pie';
console.log(fridayPizzas); // ['Canada Pie', 'Pepperoni', 'Hawaiian', 'Meatzza', 'Spicy Mama', 'Margherita']
console.log(pizzas); // ['Deep Dish', 'Pepperoni', 'Hawaiian', 'Meatzza', 'Spicy Mama', 'Margherita']
