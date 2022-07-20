// const變數不是global，他是block scoped

// default export：當import時可以自由決定名稱，通常用在module，一個module只能有一個default export
// const apiKey = 'abc123';
// export default apiKey;

// named export：import要精確指定正確的名稱，通常用在method、variable，一個module可以有多個named export
export const apiKey = 'abc123';
export const url = 'https://wesbos.com';

export function sayHi(name) {
    console.log(`Hello there ${name}`);
}

const age = 100;
const dog = 'snickers';

export { age as old, dog };
