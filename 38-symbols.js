// 第7個Primitive Type：Symbol
// Symbol是唯一的識別，所以可以防止命名衝突
// 使用時機：存Private Data

const wes = Symbol('wes');
const person = Symbol('wes');

// Symbol是獨特的
console.log(wes === person); // false

// 假設教室有兩個同名同姓的Olivia
const classRoom = {
    Mark: { grade: 50, gender: 'male' },
    Olivia: { grade: 80, gender: 'female' },
    Olivia: { grade: 80, gender: 'female' },
};

// Symbol放在物件裡面時一定要加上中括號，不然會被當成字串使用
const classRoom2 = {
    [Symbol('Mark')]: { grade: 50, gender: 'male' },
    [Symbol('Olivia')]: { grade: 80, gender: 'female' },
    [Symbol('Olivia')]: { grade: 80, gender: 'female' },
};

// Symbol沒辦法被枚舉
for (const person in classRoom2) {
    console.log(person);
}

// 如果硬要跑回圈的話要這樣用
const syms = Object.getOwnPropertySymbols(classRoom2);
console.log(syms); // [Symbol(Mark), Symbol(Olivia), Symbol(Olivia)]
// 會得到把classRoom2的key拆出來的東西

const data = syms.map((sym) => classRoom2[sym]);
console.log(data); // 會得到key變成0, 1, 2的陣列
