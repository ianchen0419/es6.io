// Temporal Dead Zone：不能在一個變數被宣告之前存取他

console.log(pizza); // undefined
var pizza = 'Deep Dish';

console.log(pizza1); // error
const pizza1 = 'Deep Dish';
