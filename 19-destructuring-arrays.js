const details = ['Wes Bos', 123, 'wesbos.com'];

// ES6之前的變數命名方式
// const name = details[0]
// const id = details[1]

// 當要解構物件時，要使用大括弧語法，但是因為這次要解構陣列，所以使用中括弧語法
const [name, id, website] = details;

const data = 'Basketball,Sports,90210,23,wes,bos,cool';
const [itemName, category, sku, inventory] = data.split(',');
// wes, bos, cool的資訊不會被解構出來（因為沒有命名到那麼後面）

// 解構剩下的東西（The rest of them）
const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];

// captain會是Wes、assistant是Harry，但是player只有Sarah
// （我們希望剩下3個都是player）
// const [captain, assistant, players] = team;

// 想要剩下所有人都是player可以這樣寫
const [captain, assistant, ...players] = team;
console.log(players); // ['Sarah', 'Keegan', 'Riker']
