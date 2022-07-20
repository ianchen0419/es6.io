const inventors = ['Einstein', 'Newton', 'Galileo'];
const newInventors = ['Musk', 'Jobs'];

// 想要把newInventors加進去inventors裡面
// 用push結果變成Nested Array
// inventors.push(newInventors);
// console.log(inventors); // ['Einstein', 'Newton', 'Galileo', Array(2)]

// push.apply
// inventors.push.apply(inventors, newInventors);
// 這段實際上等於這樣
// inventors.push.call(inventors, newInventors[0], newInventors[1]);

// Array的原型練裡面的this等於array本身，所以第一個參數（inventors）可以跳過看，因為沒影響
// 所以也等於這樣
// inventors.push('Mush', 'Jobs')

// Spread拯救你
inventors.push(...inventors);

const name = ['Wes', 'Bos'];

function sayHi(first, last) {
    console.log(`Hey there ${first} ${last}`);
}

// 傳統是這樣寫
sayHi(name[0], name[1]); // Hey there Wes Bos

// 用Spread可以簡化成這樣
sayHi(...name); // Hey there Wes Bos
