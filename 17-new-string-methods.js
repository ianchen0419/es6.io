const course = 'RFB2';
const flightNumber = '20-AC2018-jz';
const accountNumber = '825242631RT0001';

const make = 'BMW';
const model = 'x5';
const colour = 'Royal Blue';

// 1) .startWith()
course.startsWith('RFB'); // true
course.startsWith('rfb'); // false
flightNumber.startsWith('AC'); // false
flightNumber.startsWith('AC', 3); // true 從第3個字串開始尋找

// 2) .endWith()
flightNumber.endsWith('jz'); // true
accountNumber.endsWith('RT', 11); // true

// 3) .includes()
flightNumber.includes('AC'); // true
flightNumber.includes('ac'); // false

// 4) .repeat()
'💮'.repeat(10); //💮💮💮💮💮💮💮💮💮💮

// left pad function
function leftPad(str, length = 20) {
    return `→ ${` `.repeat(length - str.length)}${str}`;
}

console.log(leftPad(make));
console.log(leftPad(model));
console.log(leftPad(colour));

`${'💮' * 5}`.repeat(10) + ' Batman!';
// 'NaNNaNNaNNaNNaNNaNNaNNaNNaNNaN Batman!'
