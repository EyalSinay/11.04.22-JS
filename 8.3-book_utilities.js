const theLittlePrince = {
    name: "'The Little Prince'",
    author: "Antoine de Saint-Exupéry",
    year: 1943,
};
const mobyDick = {
    name: "'Moby-Dick'",
    author: "Herman Melville",
    year: 1851,
};


const bookUtils = {};

bookUtils.getFirstPublished = function (book1, book2) {
    if (book1.year < book2.year) {
        return book1;
    }
    else if (book1.year > book2.year) {
        return book2;
    }
    else {
        return "draw";
    };
};

// console.log(bookUtils.getFirstPublished(theLittlePrince, mobyDick));

bookUtils.setNewEdition = function (book, editionYear) {
    if (book.latestEdition) {
        book.latestEdition = book.latestEdition < editionYear ? editionYear : book.latestEdition;
    }
    else {
        book.latestEdition = editionYear;
    };
};
// bookUtils.setNewEdition(theLittlePrince, 100);
// bookUtils.setNewEdition(theLittlePrince, 50);
// bookUtils.setNewEdition(theLittlePrince, 500);
// console.log(theLittlePrince);


bookUtils.setLanguage = function (book, languageInput) {
    book.language = languageInput;
};
// bookUtils.setLanguage(theLittlePrince, "hebrew");
// console.log(theLittlePrince);


bookUtils.setTranslation = function (book, language, translator) {
    book.translation = {
        translator: translator,
        language: language,
    };
};
// bookUtils.setTranslation(theLittlePrince, "hebrew", "Eyal");
// console.log(theLittlePrince);


bookUtils.setPublisher = function (book, name, location) {
    book.publisher = {
        name: name,
        location: location,
    };
};
// bookUtils.setPublisher(theLittlePrince, "Eyal", "Israel");
// console.log(theLittlePrince);
// bookUtils.setPublisher(mobyDick, "Eyal", "Israel");
// console.log(theLittlePrince);


bookUtils.isSamePublisher = function (book1, book2) {
    if (book1.publisher.name === book2.publisher.name && book1.publisher.name === book2.publisher.name) {
        return "Identical Publisher";
    }
    else {
        return "Not identical Publisher";
    }
};
// console.log(bookUtils.isSamePublisher(theLittlePrince, mobyDick));