const strings = [
    'short',
    'medium size',
    'this is really really long',
    'this is really reall really really really really long',
];
const length = strings.sort((a, b) => b.length - a.length).map((str) => str.length);
console.log(length);

'wes'.padStart(6); // "  wes"
'wes'.padEnd(6); // "wes   "
'wes'.padEnd(6, 'X'); // "wesXXX"

strings.forEach((str) => console.log(str.padStart(length)));

// 也適合用在 001, 002, 這種地方
