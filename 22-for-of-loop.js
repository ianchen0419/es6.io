/* eslint-disable */
Array.prototype.shuffle = function () {
    var i = this.length,
        j,
        temp;
    if (i == 0) return this;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};

// 任何給Array添加的額外屬性都會被for...in遍歷到
cuts.shop = 'MM MEats';

const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

// ES6以前的loop
// for...迴圈，缺點是太冗長
for (let i = 0; i < cuts.length; i++) {
    console.log(cuts[i]);
}

// forEach，缺點是沒有辦法skip（沒有break跟continue）
cuts.forEach((cut) => {
    console.log(cut);

    // if(cut === 'Brisket') { break; } // error
});

// for...in迴圈，缺點是沒有辦法拿到cut
// 缺點是如果給Array.prototype加上了客製化function
// 那麼index輸出會變成 0, 1, 2, 3, suffle
// 然後cuts[index]輸出會變 Chuck, Brisket, Shank, Short Rib, function() {....
// 如果跟一些會改變Array原型練的套件搭配使用會危險，例如MooTools
for (const index in cuts) {
    // console.log(index);
    console.log(cuts[index]);
}

cuts.shuffle();

// ES6的for...of
for (const cut of cuts) {
    console.log(cut);

    // 可以break
    if (cut === 'Brisket') {
        break;
    }
}

// 可以break（整個中止）
for (const cut of cuts) {
    console.log(cut);

    if (cut === 'Brisket') {
        break;
    }
}

// 也可以跳過（只跳過Brisket，其他繼續）
for (const cut of cuts) {
    if (cut === 'Brisket') {
        continue;
    }

    console.log(cut);
}
