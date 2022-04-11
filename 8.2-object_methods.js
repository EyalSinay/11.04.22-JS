const myCountry = {
    country: "Israel",
    capital: "Jerusalem",
    language: "hebrew",
    population: 9.217,
    neighbors: ["Egypt", "Jordan", "Lebanon", "Syria"],
    describe: function () {
        console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}.`);
    },
};

myCountry.describe();