const myLibrary = [];

// function Book(title, author, pages, readStatus) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.readStatus = readStatus;
//   this.info = function () {
//     return (
//       this.title +
//       " by " +
//       this.author +
//       ", " +
//       this.pages +
//       " pages, " +
//       (this.readStatus ? "" : "not ") +
//       "read"
//     );
//   };
// }

class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }

  info() {
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
  }
}

function addBookToLibrary(title, author, pages, readStatus) {
  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
}

function displayBooks() {
  const libraryDiv = document.getElementById("libraryDiv");
  libraryDiv.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const newBookDiv = document.createElement("div");
    newBookDiv.className = "book";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteButton";
    deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 28 28">
    <path fill="#EF2828" d="M11.5 6h5a2.5 2.5 0 0 0-5 0M10 6a4 4 0 0 1 8 0h6.25a.75.75 0 0 1 0 1.5h-1.31l-1.217 14.603A4.25 4.25 0 0 1 17.488 26h-6.976a4.25 4.25 0 0 1-4.235-3.897L5.06 7.5H3.75a.75.75 0 0 1 0-1.5zM7.772 21.978a2.75 2.75 0 0 0 2.74 2.522h6.976a2.75 2.75 0 0 0 2.74-2.522L21.436 7.5H6.565zM11.75 11a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75m5.25.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0z" />
    </svg>`;
    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      displayBooks();
      console.log(i);
    });

    const label = document.createElement("label");
    label.className = "switch";

    const span = document.createElement("span");
    span.textContent = "Read:";
    label.appendChild(span);

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = book.readStatus;
    input.addEventListener("change", () => {
      book.readStatus = input.checked;
    });

    const sliderSpan = document.createElement("span");
    sliderSpan.className = "slider round";
    label.appendChild(input);
    label.appendChild(sliderSpan);

    newBookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
      `;

    newBookDiv.appendChild(label);
    newBookDiv.appendChild(deleteBtn);

    libraryDiv.appendChild(newBookDiv);
  }
}

addBookToLibrary("The Hobbit", "J.R.R.Tolkien", 295, false);
addBookToLibrary("The fault in our stars", "WhatsHisName", 187, true);

displayBooks();

document.getElementById("showFormBtn").addEventListener("click", function () {
  const form = document.getElementById("addBookForm");
  const button = document.getElementById("showFormBtn");
  const header = document.getElementById("Title");
  const books = document.getElementById("libraryDiv");

  if (form.style.width === "15rem") {
    form.style.width = "0rem";
    button.style.left = "0";
    books.style.left = "5rem";
  } else {
    form.style.width = "15rem";
    button.style.left = "15rem";
    books.style.left = "20rem";
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

    form.style.width = "0rem";
    document.getElementById("showFormBtn").style.left = "0";
  });
});
