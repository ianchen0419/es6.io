const weather = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ temp: 29, conditions: 'Sunny with Clouds' });
    }, 2000);
});

const tweets = new Promise((resolve) => {
    setTimeout(() => {
        resolve(['I like cake', 'BBQ is good too!']);
    }, 500);
});

// Promise.all 會等到所有都好了再一次丟給你
Promise.all([weather, tweets]).then((responses) => {
    console.log(responses); // [{…}, Array(2)] 把上面兩個拼成陣列回傳出來

    // 解構命名
    const [weatherInfo, tweetsInfo] = responses;
    console.log(weatherInfo, tweetsInfo);
});

// 真實API挑戰

// const postsPromise = fetch('https://wesbos.com/wp-json/wp/v2/posts'); // CORS
const postsPromise = fetch('https://jsonplaceholder.typicode.com/todos');
const streetCarsPromise = fetch(
    'http://data.ratp.fr/api/datasets/1.0/search/?q=paris'
);

Promise.all([postsPromise, streetCarsPromise])
    .then((responses) => {
        // console.log(responses);
        return Promise.all(responses.map((res) => res.json()));
    })
    .then((responses) => {
        console.log(responses);
    });
