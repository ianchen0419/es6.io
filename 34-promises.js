// $.getJSON
// $.ajax

console.log("Going to fetch the latest posts from Wes' Blog");
// const posts = fetch('https://wesbos.com/wp-json/wp/v2/posts'); // CORS
const posts = fetch('https://jsonplaceholder.typicode.com/todos');
console.log(posts);
console.log('Done!');

// Promise是Async，其他程式不會等Promise執行完，會先往下繼續跑
// Going to fetch the latest posts from Wes' Blog
// Done!
// Promise {<pending>}

// const postPromise = fetch('https://wesbos.com/wp-json/wp/v2/posts');
const postPromise = fetch('https://jsonplaceholder.typicode.com/todos');

// then只會在data回來時執行
// postPromise.then((data) => {
//     console.log(data);
//     return data.json();
// });

//.on()裡面的函式叫做callback，他只會在a被點了後才會執行
// $('a').on('click', function(){

// })

//可以用箭頭函數簡寫
// then只會在Promise成功地回傳資料時啟動
// catch是有error時啟動
postPromise
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((err) => {
        console.log('Error!');
        console.error(err);
    });
