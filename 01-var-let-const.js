var width = 100;
console.log(width);

var width = 200;
console.log(width); // var可以被重複定義

// Scope: where these variables avaible for me?
// var是Function Scope，如果他在Function裡面被宣告，那只有在Function裡面能夠存取他

function setWidth() {
    var width2 = 100;
    console.log(width2);
}
setWidth();

console.log(width); // failed

// var是Function Scope，如果是If Scope的話她就可在外面存取到
var age = 100;
if (age > 12) {
    var dogYears = age * 7;
    console.log(`Your are ${dogYears} dog years old!`);
}
console.log(dogYears); // 700

// let跟const則是Block Scope，所以他只要碰到大括號，都會被scoped
if (age > 12) {
    let dogYears = age * 7;
    console.log(`Your are ${dogYears} dog years old!`);
}
console.log(dogYears); // failed

let height = 200;
const key = 'abc123';
