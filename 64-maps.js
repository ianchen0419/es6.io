// Map跟Set很像，但是他有key跟value（有點像Swift的Dictionary？）

const dogs = new Map();

dogs.set('Snickers', 3);
dogs.set('Sunny', 2);
dogs.set('Hugo', 10);

// 確認Key有沒有存在
dogs.has('Snickers'); // true

// 拿值
dogs.get('Snickers'); // 3

// 刪除
// dogs.delete('Hugo');

// 可以用ForEach
dogs.forEach((val, key) => console.log(val, key));
// 3 'Snickers'
// 2 'Sunny'
// 10 'Hugo'

// 也可以for...of
for (const dog of dogs) {
    console.log(dog); // 回傳Array
    // ['Snickers', 3]
    // ['Sunny', 2]
    // ['Hugo', 10]
}

// 解構
for (const [key, val] of dogs) {
    console.log(key, val);
}
