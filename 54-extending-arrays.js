class MovieCollection extends Array {
    constructor(name, ...items) {
        // super(items[0], items[1]);
        super(...items); // 等於 new Array(1, 2, 3)
        this.name = name;
    }

    add(movie) {
        this.push(movie);
    }

    topRated(limit = 10) {
        console.log(this);
        return this.sort((a, b) => (a.stars > b.starts ? -1 : 1)).slice(
            0,
            limit
        );
    }
}

const movies = new MovieCollection(
    "Wes's Fav Movies",
    { name: 'Bee Movie', stars: 10 },
    { name: 'Star Wars Trek', stars: 1 },
    { name: 'Virgin Suicides', stars: 7 },
    { name: 'King of the Road', stars: 8 }
);

movies.add({ name: 'Titanic', stars: 5 });

for (const movie in movies) {
    // for...in會把name也列出來
    console.log(movie); // 0, 1, 2, 3, 4, name
}

for (const movie of movies) {
    // for...of就只會列出底下的Object
    console.log(movie);
}
