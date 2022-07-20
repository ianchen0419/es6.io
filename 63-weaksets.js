// WeakSet只能塞物件，不能塞數字、字串等
// WeakSet不能Iterable
// WeakSet沒有.clear（因為他是弱引用）

// WeakSet適合儲存DOM Node，或是其他物件你之後可能刪掉他

let dog1 = { name: 'Snickers', age: 3 };
let dog2 = { name: 'Sunny', age: 1 };

const weakSause = new WeakSet([dog1, dog2]);
weakSause.has(dog1); // true
weakSause.has(dog2); // true

// for (const dog of weakSause) {
//     console.log(dog); // weakSause is not iterable
// }

// weakSause.clear() // error

console.log(weakSause);
dog1 = null;
console.log(weakSause); // memory leak
// 然後等幾秒後再去Console Panel執行`weakSause`，就會發現裡面成員只剩下1個了，所以其實沒有Memory Leak的問題
