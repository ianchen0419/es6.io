const map = {};
map.longitiude = 79.3423; // spell wrong
map.longitude = 79.3423; // full spelling
map.long = 79.3423; // wrong key
map.lon = 79.3423; // nope
map.lng = 79.3423; // Got it!

const person = { name: 'Wes' };
person.ID = 123; // no
person.iD = 123; // no
person.id = 123; // yes

const safeHandler = {
    set(target, name, value) {
        console.log(target); // { id: 100}
        console.log(name); // ID
        const likeKey = Object.keys(target).find((k) => k.toLowerCase() === name.toLowerCase());

        if (!(name in target) && likeKey) {
            throw new Error(
                `Oops! Looks like we already have a(n) ${name} property but with the case of ${likeKey}.`
            );
        }
        target[name] = value;
    },
};
const saftey = new Proxy({ id: 100 }, safeHandler);

saftey.ID = 200;
saftey.name = 'wes';
saftey.Name = 'wesley'; // error
