const ages = [32, 15, 19, 12];
const youngins = [1, 2, 2, 4];

// 確認是否至少有一位成人
const adultPresent = ages.some((age) => age >= 18);
console.log(adultPresent); // true
console.log(youngins); // false

// 是否每個人都滿19歲
const allOldEnough = ages.every((age) => age >= 19);
console.log(allOldEnough); // false
