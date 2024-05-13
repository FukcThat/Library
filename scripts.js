const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.info = function () {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages, " +
      (this.readStatus ? "" : "not ") +
      "read"
    );
  };
}

function addBookToLibrary(bookInstance) {
  myLibrary.push(bookInstance);
}

console.log(myLibrary);

addBookToLibrary("The Hobbit", "J.R.R.Tolkien", 295, false);
console.log(myLibrary);

// const theHobbit = new Book("The Hobbit", "J.R.R.Tolkien", "295", false);
// const anotherBook = new Book("Something", "Author", 200, false);

// const bookArray = [theHobbit, anotherBook];

// bookArray.forEach((book) => {
//   myLibrary.push(book);
// });

// console.log(myLibrary);

//console.log(theHobbit.info());
