console.log("LIB_APP_INIT");

//Existing books in library - Details gotten from the HTML main file
const book1 = {
    title: document.getElementById("title1"),
    author: document.getElementById("author1")
}

const book2 = {
    title: document.getElementById("title2"),
    author: document.getElementById("author2")
}

const book3 = {
    title: document.getElementById("title3"),
    author: document.getElementById("author3")
}

const book4 = {
    title: document.getElementById("title4"),
    author: document.getElementById("author4")
}

const book5 = {
    title: document.getElementById("title5"),
    author: document.getElementById("author5")
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
//DEFINE AND FETCH BOOK DETAILS FROM DOM
const bookNew1 = new Book(titles.title1, authors.author1);
const bookNew2 = new Book(titles.title2, authors.author2);
const bookNew3 = new Book(titles.title3, authors.author3);
const bookNew4 = new Book(titles.title4, authors.author4);
const bookNew5 = new Book(titles.title5, authors.author5);

bookNew1.ShowBook();
bookNew2.ShowBook();
bookNew3.ShowBook();
bookNew4.ShowBook();
bookNew5.ShowBook();

const bookDisplay1 = document.getElementById("books-list");
const booksElements = bookDisplay1.getElementsByTagName("li");

for (let i = 0; i < booksElements.length; i++) {
    console.log(booksElements[i].innerHTML);
}

booksElements[0].innerHTML = " 1. " + titles.title1 + " by " + authors.author1;
booksElements[1].innerHTML = " 2. " + titles.title2 + " by " + authors.author2;
booksElements[2].innerHTML = " 3. " + titles.title3 + " by " + authors.author3;
booksElements[3].innerHTML = " 4. " + titles.title4 + " by " + authors.author4;
booksElements[4].innerHTML = " 5. " + titles.title5 + " by " + authors.author5;

const BOOK = {
    title: document.getElementById("bookTitle"),
    author: document.getElementById("author"),
    year: document.getElementById("year"),
    publisher: document.getElementById("publisher"),
    submit: document.getElementById("book_submit")
}

let myLibrary = [];

//SUPER CLASS METHOD
Book.prototype.addBookToLibrary = function () {
    var book_title = document.querySelector('#bookTitle').value;
    var book_author = document.querySelector('#author').value;
    var book_year = document.querySelector('#year').value;
    var book_publisher = document.querySelector('#publisher').value;

    myLibrary.push(book_title);
    myLibrary.push(book_author);
    myLibrary.push(book_year);
    myLibrary.push(book_publisher);

    // myLibrary.forEach(function (book) {
    //     console.log(book);
    // });
}
