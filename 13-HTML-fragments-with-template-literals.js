const person = {
    name: 'Wes',
    job: 'Web Developer',
    city: 'Hamilton',
    bio: 'Wes is a really cool guy that loves to teach web development!',
};

// 在ES6以前，如果要處理斷行，需要加上`\`
var text = 'Hello here, \
    how are you \
';

const markup = `
    <div class="person">
        <h2>
            ${person.name}
            <span class="job">${person.job}</span>
        </h2>
        <p class="location">${person.city}</p>
        <p class="bio">${person.bio}</p>
    </div>
`;

document.body.innerHTML = markup;

const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'Hugo', age: 8 },
    { name: 'Sunny', age: 1 },
];

const markup2 = `
    <ul class="dogs">
        ${dogs
            .map(
                (dog) => `
            <li>
                ${dog.name} 
                is 
                ${dog.age * 7}
            </li>`
            )
            .join('')}
    </ul>
`;

document.body.innerHTML += markup2;

const song = {
    name: 'Dying to live',
    artist: 'Tupac',
    featuring: 'Biggie Smalls',
};

const markup3 = `
    <div class="song">
        ${sone.name} - ${sone.artist}
        ${song.featuring ? `(Featuring ${song.featuring})` : ''}
    </div>
`;

document.body.innerHTML += markup3;

const beer = {
    name: 'Belgian Wit',
    brewery: 'Steam Whistle Brewery',
    keywords: ['pale', 'cloudy', 'spiced', 'crisp'],
};

function renderKeywords(keywords) {
    return `
        <ul>
            ${keywords.map((keyword) => `<li>${keyword}</li>`).join('')}
        </ul>
    `;
}

const markup4 = `
<div class="beer">
    <h2>${beer.name}</h2>
    <p class="brewery">${beer.brewery}</p>
    ${renderKeywords(beer.keywords)}
</div>
`;

document.body.innerHTML += markup4;
