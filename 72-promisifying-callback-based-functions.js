// 很多早期的API都是callback，這篇介紹如何在callback基礎的api做Promise

// 這是會回傳callback的古早API
// navigator.geolocation.getCurrentPosition(
//     function (pos) {
//         console.log('it worked!');
//         console.log(pos);
//     },
//     function (err) {
//         console.log('it failed');
//         console.log(err);
//     }
// );

function getCurrentPosition(...args) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(...args, resolve, reject);
    });
}

async function go() {
    console.log('starting');
    // const pos = await getCurrentPosition({});
    const pos = await getCurrentPosition();
    console.log(pos);
    console.log('finished');
}

go();
