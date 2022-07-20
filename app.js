const inventory = {
    backpacks: 10,
    jeans: 23,
    hoodies: 4,
    shoes: 11,
};

Object.keys(inventory); // ['backpacks', 'jeans', 'hoodies', 'shoes']
Object.values(inventory); // [10, 23, 4, 11]
Object.entries(inventory); // [Array(2), Array(2), Array(2), Array(2)]

// Make a nav for the inventory
const nav = Object.keys(inventory)
    .map((item) => `<li>${item}</li>`)
    .join('');
console.log(nav);

// tell us how many values we have
const totalInventory = Object.values(inventory).reduce((a, b) => a + b);
console.log(totalInventory);

// print an inventory list with numbers
Object.entries(inventory).forEach(([key, val]) => {
    console.log(key, val);
});

for (const [key, val] of Object.entries(inventory)) {
    console.log(key);
    if (key === 'jeans') break;
}
