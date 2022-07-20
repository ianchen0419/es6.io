// Generators
// Generator函式我們可以啟動或是結束、暫停、無限執行他，也可以在事後傳遞資訊過去

// Generator的語法：function*
// function listPeople() {
//     console.log('Wes');
//     console.log('Kait');
//     console.log('Snickers');
// }

// listPeople();

function* listPeople() {
    // yield：立刻回傳
    yield 'Wes';
    yield 'Kait';
    yield 'Snickers';
}

const people = listPeople();

/**
 * 這一段要直接在Console Panel執行
 *
 * people.next() //{value: 'Wes', done: false}
 * people.next() //{value: 'Kait', done: false}
 * people.next() //{value: 'Snickers', done: false}
 * people.next() //{value: undefined, done: true}
 */

function* list() {
    let i = 0;
    yield i;
    i++;
    yield i;
    i++;
    yield i;
}

const callList = list();

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
];

function* loop(arr) {
    for (const item of arr) {
        yield item;
    }
}

const inventorGen = loop(inventors);
