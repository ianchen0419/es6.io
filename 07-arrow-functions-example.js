const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

/** 這段會出錯，因為大括弧會被認為是匿名函式的body
const win = winners.map((winner, i) => { name: winner, race: race, place: i });
*/

// 解法：包上小括號
const win = winners.map((winner, i) => ({
    name: winner,
    race: race,
    place: i + 1,
}));

// ES6可以把race: race簡化成race
const win2 = winners.map((winner, i) => ({ name: winner, race, place: i + 1 }));

const ages = [23, 62, 45, 234, 2, 62, 234, 62, 34];

const old = ages.filter((age) => age >= 60);
console.log(old);
