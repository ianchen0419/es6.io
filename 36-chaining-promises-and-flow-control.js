const posts = [
    { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
    { title: 'CSS!', author: 'Chris Coyier', id: 2 },
    { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];

const authors = [
    { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
    {
        name: 'Chris Coyier',
        twitter: '@chriscoyier',
        bio: 'CSS Tricks and CodePen',
    },
    { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
];

// 模擬真實使用的情境，因為跟後端拿上面這些東西會需要點時間，所以要用Promise
function getPostById(id) {
    // 建立一個新Promise
    return new Promise((resolve, reject) => {
        // 用setTimeout模擬真實狀況
        setTimeout(() => {
            // 找到目標的PO文
            const post = posts.find((post) => post.id === id);
            if (post) {
                resolve(post); // 回傳一個POST
            } else {
                reject(Error('No Post Was Found!'));
            }
        }, 2000);
    });
}

// hydrating
// 將posts裡面的author部分比對後填入authors對應的資料
function hydrateAuthor(post) {
    // 建立一個新Promise（因為實際跟Server調資料需要時間，所以要寫成Promise）
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 找到作者物件
            const authorDetails = authors.find(
                (person) => person.name === post.author
            );
            if (authorDetails) {
                // 覆蓋原本的post變數
                post.author = authorDetails;
                resolve(post);
            } else {
                reject(Error('Can not find the author'));
            }
        }, 500);
    });
}

getPostById(2)
    .then((post) => {
        console.log(post);
        return hydrateAuthor(post); // 定義hydrateAuthor回傳Promise本身，所以可以繼續往下then
    })
    .then((post) => {
        console.log(post);
    })
    .catch((err) => {
        console.error(error);
    });
