// Destruct: 擷取資料然後放入陣列、物件等等

const person = {
    first: 'Wes',
    last: 'Bos',
    country: 'Canada',
    city: 'Hamilton',
    twitter: '@wesbos',
};

// ES6以前命名變數要一個一個用
// const name = person.first;
// const last = person.last;

// ES6的話可以宣告大括弧`{}`，但是這個大括弧不是物件，而是解構的語法（destructuring syntax）
const { first, last } = person;
// 給定一個變數叫做first，然後從person當中拿出person.first這個變數
// 給定一個變數叫做last，然後從person當中拿出person.last這個變數

const wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
        social: {
            twitter: 'https://twitter.com/wesbos',
            facebook: 'https://facebook.com/wesbos.developer',
        },
        web: {
            blog: 'https://wesbos.com',
        },
    },
};
// const twitter = wes.links.social.twitter;

// value assignment
const { twitter, facebook } = wes.links.social;

// alias assignment
// 重新命名：原本的名字是twitter，但是因為跟前面的變數名稱重複，所以重新命名，宣告變數成為`tweet`
const { twitter: tweet, facebook: fb } = wes.links.social;

var settings = { width: 300, color: 'black' }; // height, fontSize

// 因為settings沒有提供height跟fontSize，所以這兩個變數會變成undefined
// const { width, height, color, fontSize } = settings

// 解決辦法是提供Default value
const { width = 100, height = 100, color = 'blue', fontSize = 25 } = settings;

// 挑戰題
// const { w: width = 400, h: height = 500 } = { w: 800 };
// const width = 800; const height = 500;
