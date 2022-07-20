// 想要p1, p2同時進行
// async function go() {
//     const p1 = await fetch('https://api.github.com/users/wesbos');
//     const p2 = await fetch('https://api.github.com/users/stolinski');
// }

// 作法一
// async function go() {
//     const p1 = fetch('https://api.github.com/users/wesbos').then((r) => r.json());
//     const p2 = fetch('https://api.github.com/users/stolinski').then((r) => r.json());

//     const res = await Promise.all([p1, p2]);
//     console.log(res);
// }

// 作法二
// async function go() {
//     const p1 = fetch('https://api.github.com/users/wesbos');
//     const p2 = fetch('https://api.github.com/users/stolinski');

//     const res = await Promise.all([p1, p2]);
//     const dataPromises = res.map((r) => r.json());
//     console.log(dataPromises);
//     const wesAndScott = await Promise.all(dataPromises);
//     console.log(wesAndScott);
// }

// 善用解構
async function go() {
    const p1 = fetch('https://api.github.com/users/wesbos');
    const p2 = fetch('https://api.github.com/users/stolinski');

    const res = await Promise.all([p1, p2]);
    const dataPromises = res.map((r) => r.json());
    console.log(dataPromises);
    const [wes, scott] = await Promise.all(dataPromises);
    console.log(wes, scott);
}

go();

async function getData(names) {
    const promises = names.map((name) =>
        fetch(`https://api.github.com/users/${name}`).then((r) => r.json())
    );
    const people = await Promise.all(promises);
    console.log(people);
}
getData(['wes', 'stolinski', 'darcyclarke']);

// Promise.all 會等都到齊再回傳
// Promise.race 只要一個最快的有回傳，就會回傳
