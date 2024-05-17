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
  const libraryDiv = document.getElementById("libraryDiv");
  libraryDiv.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const newBookDiv = document.createElement("div");
    newBookDiv.className = "book";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      displayBooks();
      console.log(i);
    });

    newBookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <p>Status: ${book.readStatus ? "Read" : "Not read"}</p>
      `;

    newBookDiv.appendChild(deleteBtn);

    libraryDiv.appendChild(newBookDiv);
  }
}

displayBooks();

document.getElementById("showFormBtn").addEventListener("click", function () {
  const form = document.getElementById("addBookForm");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("addBookForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let pages = parseInt(document.getElementById("pagesInput").value, 10);
    let readStatus = document.getElementById("readStatusInput").checked;

    addBookToLibrary(title, author, pages, readStatus);

    displayBooks();
    form.reset();

    document.getElementById("addBookForm").style.display = "none";
  });
});
