import slug from 'slug';
import { url } from './config';
import md5 from 'md5';

export default function User(name, email, website) {
    // return {
    //     name: name,
    //     email: email,
    //     website: website,
    // };

    // ES6精簡
    return { name, email, website };
}

export function createURL(name) {
    return `${url}/users/${slug(name)}`;
}

export function gravatar(email) {
    const hash = md5(email);
    const photoURL = `https://www.gravatar.com/avatar/${hash}`;
    return photoURL;
}
