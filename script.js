console.log("LIB_APP_INIT");

//BOOK OBJECT ELEMENTS
const BOOK = {
    title: document.getElementById("bookTitle"),
    author: document.getElementById("author"),
    year: document.getElementById("year"),
    publisher: document.getElementById("publisher"),
    submit: document.getElementById("book_submit")
}

const book1 = {
    title: document.getElementById("title1").innerText,
    author: document.getElementById("author1").innerText,
    year: "2017",
    publisher: "Arnoldo Mondadori Editor"
}

const book2 = {
    title: document.getElementById("title2").innerText,
    author: document.getElementById("author2").innerText,
    year: "2009",
    publisher: "Doubleday (US) Transworld (UK)"
}

const book3 = {
    title: document.getElementById("title3").innerText,
    author: document.getElementById("author3").innerText,
    year: "2007",
    publisher: "Bloomsbury Publishing"
}

const book4 = {
    title: document.getElementById("title4").innerText,
    author: document.getElementById("author4").innerText,
    year: "1998",
    publisher: "Bloomsbury Publishing"
}

const book5 = {
    title: document.getElementById("title5").innerText,
    author: document.getElementById("author5").innerText,
    year: "2010",
    publisher: "Portfolio/Penguin"
}

let myLibrary = [book1, book2, book3, book4, book5];

const table = document.getElementById("books-list-table");

myLibrary.forEach(book => {
    const row = table.insertRow();
    const titleCell = row.insertCell(0);
    titleCell.innerHTML = book.title;

    const authorCell = row.insertCell(1);
    authorCell.innerHTML = book.author;

    const yearCell = row.insertCell(2);
    yearCell.innerHTML = book.year;

    const publisherCell = row.insertCell(3);
    publisherCell.innerHTML = book.publisher;

    const statusCell = row.insertCell(4);
    statusCell.innerHTML = `<button class="button-read" type="button">Read</button> <button
    class="button-delete" type="button">Delete</button>`;

});

function addBookToLibrary() {
    Book.call(this, title, author, year, publisher);

    const newBook = {
        book_title: document.querySelector('#bookTitle').value,
        book_author: document.querySelector('#author').value,
        book_year: document.querySelector('#year').value,
        book_publisher: document.querySelector('#publisher').value
    }

    myLibrary.push(newBook);
    myLibrary.forEach(function (book) {
        console.log(book);
    });
}

BOOK.submit.addEventListener('click', addBookToLibrary);

//SUPER CLASS CONSTRUCTOR
function Book(title, author, year, publisher) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.publisher = publisher;
}
//SUPER CLASS METHOD
Book.prototype.ShowBook = function () {
    console.log(this.title);
    console.log(this.author);
}

const deleteButtons = document.getElementsByClassName('button-delete');
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function () {
        const rowToDelete = this.parentNode.parentNode;
        rowToDelete.remove();
    });
}

function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

//For Future Reference

// const bookDisplay1 = document.getElementById("books-list-table");
// const booksElements = bookDisplay1.getElementsByTagName("td");

// for (let i = 0; i < booksElements.length; i++) {
//     if (booksElements[i].innerText != "Read Delete")
//         console.log(booksElements[i].innerText);
// }
// //Objects
// const titles = {
//     title1: book1.title.textContent,
//     title2: book2.title.textContent,
//     title3: book3.title.textContent,
//     title4: book4.title.textContent,
//     title5: book5.title.textContent
// }

// const authors = {
//     author1: book1.author.textContent,
//     author2: book2.author.textContent,
//     author3: book3.author.textContent,
//     author4: book4.author.textContent,
//     author5: book5.author.textContent
// }