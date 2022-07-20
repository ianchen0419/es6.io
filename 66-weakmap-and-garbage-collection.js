// WeakMap沒有size、也不可枚舉、如果他裡面的成員被消滅了，他會收回（自刪那個成員）

let dog1 = { name: 'Snickers', age: 3 };
let dog2 = { name: 'Sunny', age: 1 };

const strong = new Map();
const weak = new WeakMap();

strong.set(dog1, 'Snickers is the best!');
weak.set(dog2, 'Sunny is the best!');

weak.size; // undefined
strong.size; // 1

dog1 = null;
dog2 = null;

//過幾秒後再去Console Panel看
strong; // Map(1) {{…} => 'Snickers is the best!'} 還是有成員
weak; // WeakMap {} 變成空了
