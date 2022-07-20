function calculateBill(total, tax, tip) {
    return total + total * tax + total * tip;
}

const totalBill = calculateBill(100, 0.13, 0.15);
console.log(totalBill); // 128

// 當參數傳遞的不完全，結果會變成NaN，因為另外兩個參數變成undefined了
const totalBill2 = calculateBill(100);
console.log(totalBill); // NaN

// 以前處理預設值的做法是使用if
function calculateBill2(total, tax, tip) {
    if (tax === undefined) {
        tax = 0.13;
    }

    if (tip === undefined) {
        tip = 0.15;
    }

    return total + total * tax + total * tip;
}

const totalBill3 = calculateBill2(100);
console.log(totalBill2); // 128

// 或是可以使用OR
function calculateBill3(total, tax, tip) {
    tax = tax || 0.13;
    tip = tip || 0.15;

    return total + total * tax + total * tip;
}

// ES6可以直接寫在參數後面定義初始值
function calculateBill3(total, tax = 0.13, tip = 0.14) {
    return total + total * tax + total * tip;
}

// 如果是想要跳過中間那個參數的話，直接這樣寫會出錯
// const totalBill4 = calculateBill3(100, ,0.25);

// 要改寫成這樣
// 因為ES6的tax = 0.13只是確認參數是不是undefined，所以就填入undefined就好
const totalBill5 = calculateBil3(100, undefined, 0.25);
console.log(totalBill5);
