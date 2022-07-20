// 可以回傳Promise的API都叫做Promise-based API

// 第二個參數叫做callback
// breathe(1000, function () {
//     breathe(2000, function () {
//         breathe(3000, function () {
//             breathe(4000, function () {});
//         });
//     });
// });

// function breathe(second, fn) {
//     console.log(`take breath of ${second} second(s)`);
//     setTimeout(function () {
//         console.log(`let's move on`);
//         fn();
//     }, second);
// }

function breathe(amount) {
    return new Promise((resolve, reject) => {
        if (amount < 500) {
            reject(`That is too small of a value`);
        }
        setTimeout(() => resolve(`Done for ${amount} ms`), amount);
    });
}

// 一但中間有error，他就會中止不繼續執行後面的了
breathe(1000)
    .then((res) => {
        console.log(res);
        return breathe(500);
    })
    .then((res) => {
        console.log(res);
        return breathe(600);
    })
    .then((res) => {
        console.log(res);
        return breathe(200);
    })
    .then((res) => {
        console.log(res);
        return breathe(500);
    })
    .catch((err) => {
        console.error(err);
        console.error(`YOU SCREWED UP`);
    });
