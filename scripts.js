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

function addBookToLibrary(title, author, pages, readStatus) {
  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R.Tolkien", 295, false);
addBookToLibrary("The fault in our stars", "WhatsHisName", 187, true);

function displayBooks() {
  for (i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const newBookDiv = document.createElement("div");
    newBookDiv.className = "book";

    newBookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <p>Status: ${book.readStatus ? "Read" : "Not read"}</p>
  `;

    document.getElementById("libraryDiv").appendChild(newBookDiv);
  }
}

displayBooks();
