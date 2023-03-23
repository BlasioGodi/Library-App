console.log("LIB_APP_INIT");

//BOOK OBJECT TO ACCESS FORM PROPERTIES
//Rewrite this code to include contructors and prototypal inheritance
const BOOK = {
    title: document.getElementById("bookTitle"),
    author: document.getElementById("author"),
    year: document.getElementById("year"),
    publisher: document.getElementById("publisher"),
    submit: document.getElementById("book_submit")
}

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

//Books Fetched from DOM
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

//Library Created
let myLibrary = [book1, book2, book3, book4, book5];

createLibrary();

function createLibrary() {
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
}

//Delete Row Function
deleteRows();

function deleteRows() {
    const deleteButtons = document.getElementsByClassName('button-delete');
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', function () {
            const rowToDelete = this.parentNode.parentNode;
            rowToDelete.remove();
        });
    }
}

//Add book to Library Function
function addBookToLibrary() {
    const newBook = {
        book_title: document.querySelector('#bookTitle').value,
        book_author: document.querySelector('#author').value,
        book_year: document.querySelector('#year').value,
        book_publisher: document.querySelector('#publisher').value
    }

    myLibrary.push(newBook);

    const table = document.getElementById("books-list-table");
    const row = table.insertRow();

    const titleCell = row.insertCell(0);
    titleCell.innerHTML = newBook.book_title;

    const authorCell = row.insertCell(1);
    authorCell.innerHTML = newBook.book_author;

    const yearCell = row.insertCell(2);
    yearCell.innerHTML = newBook.book_year;

    const publisherCell = row.insertCell(3);
    publisherCell.innerHTML = newBook.book_publisher;

    const statusCell = row.insertCell(4);
    statusCell.innerHTML = `<button class="button-read" type="button">Read</button> <button
    class="button-delete" type="button">Delete</button>`;

    deleteRows();
}

BOOK.submit.addEventListener('click', addBookToLibrary);

//Blur Form Background Function
function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}