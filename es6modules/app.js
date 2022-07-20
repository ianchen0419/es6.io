// JavaScript Module
// Module是一個檔案，他有很多條函式，你可以讓這些函式在其他檔案也可以用
// 跟早期的<script>方式不同，以前的<script>會產生很多Global function，Module可以看哪個用到就加哪個

import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
// import apiKey from './src/config.js'; // Default Export的語法
import { apiKey as key, url, sayHi, old, dog } from './src/config.js'; // Named Export的語法
// import WesIsCool from './src/config.js'; // 如果是Default Export的話可任意命名

import User, { createURL, gravatar } from './src/user';

// console.log(apiKey, url);
console.log(key, url);
sayHi('wes');

const ages = [1, 1, 4, 52, 12, 4];
console.log(uniq(ages));

// const wes = new User('Wes Bos', 'wesbos@gmail.com', 'wesbos.com');
const wes = new User('Wes Bos', 'ianchen0419@gmail.com', 'wesbos.com');
const profile = createURL(wes.name);
const image = gravatar(wes.email);
console.log(image);
