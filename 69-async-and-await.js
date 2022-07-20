// Async and Await

// synchronous：表示要等前一個人做完才能往下
// Asynchronous：做了A，但是沒等A做完就馬上先做B

// const res = fetch('https://github.com');
// console.log(res);

// setInterval(() => {
//     console.log(Date.now());
// }, 500);
// 然後在Console Panel運行alert('Hi')，會發現計時器停住了，因為alert把東西blocking住了，不讓其他東西繼續往下
// alert, confrim, prompt，具有這個特性
// console.log也會這樣，會讓計時器停一陣

// 首先要有一個Promise（async/await不能取代Promise，他只是取代.then那邊）
// 然後做一個Async函式，然後在這個函式裡面寫await什麼值
function breathe(amount) {
    return new Promise((resolve, reject) => {
        if (amount < 500) {
            reject(`That is too small of a value`);
        }
        setTimeout(() => resolve(`Done for ${amount} ms`), amount);
    });
}

// Async可以寫成箭頭函數
// const go = async () => {
//     console.log('start');
//     const res = await breathe(1000);
//     console.log(res);
//     const res2 = await breathe(500);
//     console.log(res2);
//     const res3 = await breathe(750);
//     console.log(res3);
//     const res4 = await breathe(900);
//     console.log(res4);
//     console.log('end');
// };
// go();

// await後面要加Promise
async function go() {
    console.log('start');
    // 如果拿掉了await，breathe會回傳一個Promise
    // 加上await之後，breathe一樣會立即回傳Promise，但是await會讓所有事情暫停一下，在看這個Promise是被通過還是拒絕
    // const res = breathe(1000);
    const res = await breathe(1000);
    console.log(res);
    const res2 = await breathe(500);
    console.log(res2);
    const res3 = await breathe(750);
    console.log(res3);
    const res4 = await breathe(900);
    console.log(res4);
    console.log('end');
}
go();
