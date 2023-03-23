const book1 = {
    title: "Harry Potter & Deathly Hallows",
    author: "JK ROWLINGS",
    year: "2017",
    publisher: "Arnoldo Mondadori Editor"
}

const book2 = {
    title: "Origin",
    author: "Dan Brown",
    year: "2009",
    publisher: "Doubleday (US) Transworld (UK)"
}

const books = [];

books.push(book1);
books.push(book2);

// Get the table element
const table = document.getElementById("myTable");

// Loop through the books array and create a new row for each book
books.forEach(book => {
    // Create a new row
    const row = table.insertRow();

    // Add the title, author, year, and publisher as cells in the row
    const titleCell = row.insertCell(0);
    titleCell.innerHTML = book.title

    const authorCell = row.insertCell(1);
    authorCell.innerHTML = book.author;

    const yearCell = row.insertCell(2);
    yearCell.innerHTML = book.year;

    const publisherCell = row.insertCell(3);
    publisherCell.innerHTML = book.publisher;
});

