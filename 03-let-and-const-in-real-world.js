var name1 = 'wes'; // 如果直接宣告變數在global的話，會擔心其他套件蓋掉他

// 所以可以用IIFE創造一個封閉環境，讓變數不要被污染
(function () {
    var name2 = 'wes';
    console.log(name);
})();

// 但是有了const就不用管這個問題，因為變數不會被蓋掉了
const name3 = 'wes';

// 甚至，可以加上大括號，因為const是Block Scoped，這樣不同套件也不會存取到
{
    const name4 = 'wes';
}

for (var i = 0; i < 10; i++) {
    console.log(i);
    setTimeout(function () {
        console.log('The number is', i); // 10
    }, 1000);
}

/** 解法之一：
for(var i = 0; i < 10; i++) {
    console.log(i);
    
    (function(k){
        setTimeout(function() {
            console.log("i",k);
        },1000);
    }(i));
}
*/

// 或是可以改用let，因為let是Block Scoped
for (let i = 0; i < 10; i++) {
    console.log(i);
    setTimeout(function () {
        console.log('The number is', i);
    }, 1000);
}
