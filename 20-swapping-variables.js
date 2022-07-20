let inRing = 'Hulk Hogan';
let onSide = 'The Rock';

// ES6以前如果想要交換inRing跟onSide的值，需要這樣做
var tmp = inRing;
inRing = onSide;
onSide = tmp;

console.log(inRing, onSide); // The Rock Hulk Hogan
// ES6可以這樣交換這兩個變數的值
[inRing, onSide] = [onSide, inRing];
// 等號右邊是建立一個Array，裡面包有onSide跟inRing
console.log(inRing, onSide); // Hulk Hogan The Rock
