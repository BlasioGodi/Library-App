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

//Form Popup 
function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}