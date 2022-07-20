function convertCurrency(amount) {
    const converted = {
        USD: amount * 0.76,
        GPB: amount * 0.53,
        AUD: amount * 1.01,
        MEX: amount * 13.3,
    };
    return converted;
}

const hundo = convertCurrency(100);
console.log(hundo);

// ES6以前如果想要查看特定的值需要用點
console.log(hundo.AUO);
console.log(hundo.MEX);

// ES6解構可以這樣寫
// const { USD, GPB, AUD, MEX } = convertCurrency(100);
// console.log(USD, GPB, AUD, MEX);

// 而且順序可以隨意
// const { MEX, GPB, AUD, USD } = convertCurrency(100);

// 也不用全部拿，可以只拿出需要的
const { GPB, USD } = convertCurrency(100);

// 函式參數的解構
// 原本的tipCalc長這樣
// function tipCalc(total, tip = 0.15, tax = 0.13) {
//     return total + tip * total + tax * total;
// }

// 利用解構方式命名參數
function tipCalc({ total, tip = 0.15, tax = 0.13 }) {
    return total + tip * total + tax * total;
}
// 使用函式變成也要傳物件進去
// const bill = tipCalc({ total: 200, tip: 0.2, tax: 0.13 });
// console.log(bill);

// 這樣寫有一個好處是可以省略參數
// const bill = tipCalc({ total: 200, tip: 0.2 })

// 也可以隨意擺放順序
const bill = tipCalc({ tip: 0.2, total: 200 });

// 要注意是假如使用函數時什麼都沒傳，會出錯
function tipCalc2({ total = 100, tip = 0.15, tax = 0.13 }) {
    return total + tip * total + tax * total;
}
const bill2 = tipCalc2(); // error

// 解決方式是定義參數物件的初始值是空物件
function tipCalc3({ total = 100, tip = 0.15, tax = 0.13 } = {}) {
    return total + tip * total + tax * total;
}
const bill3 = tipCalc3(); // good
