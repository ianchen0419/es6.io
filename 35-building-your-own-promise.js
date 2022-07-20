// resolve：完成處理過程，然後丟回來一個data（resolve的括號裡面放data）

const p = new Promise((resolve, reject) => {
    // 當處理結束後，寫入resolve（這邊因為是練習所以省略處理的部分）
    resolve('Wes is cool');
});

p.then((data) => {
    console.log(data);
});

// 模擬正式情境，放一個計時器故意延遲他
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Wes is cool');
    }, 3000);
});

p2.then((data) => {
    console.log(data);
});

// 或是也可以放reject，但要加寫catch
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Err Wes isn't cool"); // 如果reject裡面放單純字串的話，console panel不會顯示完整的錯誤行數
    }, 3000);
});

p3.then((data) => {
    console.log(data);
}).catch((err) => {
    console.error(err);
});

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(Error("Err Wes isn't cool")); // 使用Error()這樣Console Log會很清楚
    }, 3000);
});

p4.then((data) => {
    console.log(data);
}).catch((err) => {
    console.error(err);
});
