const phoneHandler = {
    set(target, name, value) {
        // target：代表物件本身
        // name：呼叫的字，比如phoneNumbers.home = '123123'，name會等於home
        // value：呼叫給定值比如phoneNumbers.home = '123123'，value會等於123123
        target[name] = value.match(/[0-9]/g).join('');
    },

    get(target, name) {
        return target[name].replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    },
};

const phoneNumbers = new Proxy({}, phoneHandler);

phoneNumbers.work = '(234) 234 2343'; // (234) 234-2343
console.log(phoneNumbers.work); // (234) 234-2343
