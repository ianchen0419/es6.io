// Proxy
// Proxy可以覆寫物件的原生行為

const person = { name: 'Wes', age: 100 };
// Proxy裡面放2個參數，第1個參數是要魔改的物件，第2個參數handler（攔截時要做的動作）
const personProxy = new Proxy(person, {
    get(target, name) {
        console.log('someone is asking for', target, name);
        // return 'Nahhhhh';
        return target[name].toUpperCase();
    },
    set(target, name, value) {
        if (typeof value === 'string') {
            target[name] = value.trim();
        }
    },
});

// 魔改這個動作稱為Trap（攔截）
// 這行定義了personProxy的name為Wesley，要在他定義成功之前攔截，然後魔改
personProxy.name = 'Wesley';

// get
console.log(personProxy.name); // WESLEY

// set
personProxy.cool = '        ohh yeah     ';
console.log(personProxy); // Proxy {name: 'Wesley', age: 100, cool: 'ohh yeah'}
