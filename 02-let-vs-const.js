const key = 'abc123';
let points = 50;
let winner = false;

if (points > 40) {
    console.log('it ran!');
    let winner = true;
    // 裡面的winner跟外面的winner是不同變數，不會互相影響（如果改用var的話他會蓋掉）
}

// let不能重複宣告（但是var可以）
// let points = 60; // error

// let可以事後改（Re-assign），const不能給改
points = 60;
key = '1234'; // error

const person = {
    name: 'Wes',
    age: 28,
};

// Re-assign：可以針對變數做小修改，或是擴充
person.age = 29; // valid

// 但是不能重新定義
person = { name: 'Wesley' }; // error

// 如果想讓他完全不能改，要用這個方法
const wes = Object.freeze(person);
wes.age = 30;
console.log(wes); // still 28;
