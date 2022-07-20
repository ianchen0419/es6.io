// 「...」有兩種情況不是Spread Operator

// 「...」如果是放在函式的參數裡面，是Rest Param
// Rest Param的意思跟Spread Operator相反，他是把一串東西包成陣列

// 參數只需要保持第一個是rate，其他就是一串數字就好
// function convertCurrency(rate, amount1, amount2, amount3) {

// }

function convertCurrency(rate, ...amounts) {
    console.log(rate); // 1.54
    console.log(amounts); // [10, 23, 52, 1, 56]

    // 可以直接對amounts做陣列處理
    return amounts.map((amount) => amount * rate);
}

const amounts = convertCurrency(1.54, 10, 23, 52, 1, 56);
console.log(amounts); // [15.4, 35.42, 80.08, 1.54, 86.24000000000001]

// 也可以不只定義第一個變數（前面要定義幾個都可以）
function convertCurrency2(rate, tax, tip, ...amounts) {
    console.log(rate, tax, tip, amounts);
}

// 「...」如果搭配解構使用，也是Rest Param的意思
const runner = ['Wes Bos', 123, 5.5, 5, 3, 6, 35];
const [name, id, ...runs] = runner;
console.log(name, id, runs);

const team = ['Wes', 'Kait', 'Lux', 'Sheena', 'Kelly'];
const [captain, assistant, ...players] = team;
console.log(captain, assistant, players);
