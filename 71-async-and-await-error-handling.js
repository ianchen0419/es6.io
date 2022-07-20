// Async and Await

function breathe(amount) {
    return new Promise((resolve, reject) => {
        if (amount < 500) {
            reject(`That is too small of a value`);
        }
        setTimeout(() => resolve(`Done for ${amount} ms`), amount);
    });
}

// high-ordered function：包裝userPage，然後注入另一個函數
// const userPage = router.get('/user', async (req, res, next) => {
//     try {
//         const user = await User.find({ email: 'wesbos' })
//     } catch {
//         res.render('error')
//     }
// })

// await後面要加Promise
// async function go() {
//     try {
//         console.log('start');
//         const res = await breathe(1000);
//         console.log(res);
//         const res2 = await breathe(500);
//         console.log(res2);
//         const res3 = await breathe(75);
//         console.log(res3);
//         const res4 = await breathe(900);
//         console.log(res4);
//         console.log('end');
//     } catch (err) {
//         console.error(error);
//         console.error('Ohhhhh noooooo!!!');
//     }
// }
// go();

// high-ordered function：一個函式將另一個函式當作參數，然後回傳另一個新函式
function catchErrors(fn) {
    return function (...args) {
        return fn(...args).catch((err) => {
            console.error('Ohhhhh noooooo!!!');
            console.error(err);
        }); // 因為fn是Promise所以可以被.catch
    };
}

// catchErrors用起來就像這樣
// [1,2,3].map(function() {})

async function go(name, last) {
    console.log(`starting for ${name} ${last}!!`);
    const res = await breathe(1000);
    console.log(res);
    const res2 = await breathe(500);
    console.log(res2);
    const res3 = await breathe(75);
    console.log(res3);
    const res4 = await breathe(900);
    console.log(res4);
    console.log('end');
}

const wrappedFunction = catchErrors(go);

wrappedFunction('wes', 'bos');
