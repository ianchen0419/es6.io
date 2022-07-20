/**
 *  /search/wes → /user/123　→ /photo/456
 */

function ajax(url) {
    fetch(url)
        .then((data) => data.json())
        .then((data) => dataGen.next(data));
}

function* steps() {
    // 只有在第一個ajax（beer）回傳值以後，第二個yield才會啟動
    console.log('fetching beers');
    // const beers = yield ajax('http://api.react.beer/v2/search?q=hops&type=beer');
    const beers = yield ajax('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6');
    console.log(beers);

    console.log('fetching wes');
    const wes = yield ajax('https://api.github.com/users/wesbos');
    console.log(wes);

    console.log('fetching fat joe');
    const fatJoe = yield ajax('https://api.discogs.com/artists/51988');
    console.log(fatJoe);
}

const dataGen = steps();
dataGen.next(); // kick it off
