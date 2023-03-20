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


