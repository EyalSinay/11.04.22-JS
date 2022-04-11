const theLittlePrince = {
    bookName: "'The Little Prince'",
    authorName: "Antoine de Saint-Exupéry",
    publishingYear: 1943,
    country: "France",
    language: "French"
}

const bookLog = book => {
    return `The book ${book.bookName} was written by ${book.authorName} in the year ${book.publishingYear}`;
}

console.log(bookLog(theLittlePrince));