console.log("LIB_APP_INIT");

//Existing books in library - Details gotten from the HTML main file
//Feed these objects into an array
const book1 = {
    title: document.getElementById("title1"),
    author: document.getElementById("author1"),
    year: "2017",
    publisher: "Arnoldo Mondadori Editor"
}

const book2 = {
    title: document.getElementById("title2"),
    author: document.getElementById("author2"),
    year: "2009",
    publisher: "Doubleday (US) Transworld (UK)"
}

const book3 = {
    title: document.getElementById("title3"),
    author: document.getElementById("author3"),
    year: "2007",
    publisher: "Bloomsbury Publishing"
}

const book4 = {
    title: document.getElementById("title4"),
    author: document.getElementById("author4"),
    year: "1998",
    publisher: "Bloomsbury Publishing"
}

const book5 = {
    title: document.getElementById("title5"),
    author: document.getElementById("author5"),
    year: "2010",
    publisher: "Portfolio/Penguin"
}

//Objects 
const titles = {
    title1: book1.title.textContent,
    title2: book2.title.textContent,
    title3: book3.title.textContent,
    title4: book4.title.textContent,
    title5: book5.title.textContent
}

const authors = {
    author1: book1.author.textContent,
    author2: book2.author.textContent,
    author3: book3.author.textContent,
    author4: book4.author.textContent,
    author5: book5.author.textContent
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

const bookDisplay1 = document.getElementById("books-list-table");
const booksElements = bookDisplay1.getElementsByTagName("td");

for (let i = 0; i < booksElements.length; i++) {
    if (booksElements[i].getElementsByClassName("button-read") == "Read Delete")
        console.log(booksElements[i].innerText);
}

booksElements[0].innerHTML = titles.title1;

//OBJECT TO ACCESS FORM ELEMENTS - Continue from Here
const BOOK = {
    title: document.getElementById("bookTitle"),
    author: document.getElementById("author"),
    year: document.getElementById("year"),
    publisher: document.getElementById("publisher"),
    submit: document.getElementById("book_submit")
}

let myLibrary = [];

function addBookToLibrary() {
    //Reference call to SuperClass Constructor
    Book.call(this, title, author, year, publisher);
    var book_title = document.querySelector('#bookTitle').value;
    var book_author = document.querySelector('#author').value;
    var book_year = document.querySelector('#year').value;
    var book_publisher = document.querySelector('#publisher').value;

    myLibrary.push(book_title);
    myLibrary.push(book_author);
    myLibrary.push(book_year);
    myLibrary.push(book_publisher);

    myLibrary.forEach(function (book) {
        console.log(book);
    });
}

BOOK.submit.addEventListener('click', addBookToLibrary);

//Form Popup 
function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}