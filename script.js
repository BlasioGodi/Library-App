console.log("LIB_APP_INIT");

const BOOK = {
    title: document.getElementById("bookTitle"),
    author: document.getElementById("author"),
    year: document.getElementById("year"),
    publisher: document.getElementById("publisher"),
    submit: document.getElementById("book_submit")
}

let mylibrary = [];

//Add book
function AddBook() {
    var book_title = document.querySelector('#bookTitle').value;
    var book_author = document.querySelector('#author').value;
    var book_year = document.querySelector('#year').value;
    var book_publisher = document.querySelector('#publisher').value;

    mylibrary.push(book_title);
    mylibrary.push(book_author);
    mylibrary.push(book_year);
    mylibrary.push(book_publisher);

    mylibrary.forEach(function (book) {
        console.log(book);
    });
}

BOOK.submit.addEventListener('click', AddBook);

function Books(title, author, year, publisher) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.publisher = publisher;
    this.bookinfo = function () {
        return title + ',' + author + ',' + year + ',' + publisher;
    }
}

const book_one = new Books("Harry Potter", "J.K. Rowlings", "1991", "Kingston");

console.log(book_one.bookinfo());

//Form Popup 
function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}






//BOOK SUPERCLASS
function Books() {
}

//METHOD OF SUPERCLASS
Books.prototype.BookInfo = function () {
    console.log(this.title);
    console.log(this.author);
    console.log(this.genre);
}

function Thriller(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
}

Thriller.prototype = Object.create(Books.prototype);

const newBook = new Thriller("Harry Potter and The Chamber of Secrets", "J.K. Rowlings", "Thriller");

//PRINT OUTPUT OF THE FUNCTION PROTOTYPE
newBook.BookInfo();
console.log(newBook.title, newBook.author, newBook.genre);