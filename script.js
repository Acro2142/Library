let myLibrary = [];
let bookID = 0;
const bookContainer = document.getElementById('book-container');
const testBook = new Book('testtitle', 'test author', 23, true);
const newBook = document.getElementById('new-book');
newBook.addEventListener('click', createBook );
addBookToLibrary(testBook);

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.hasRead = hasRead;

    this.id = bookID;
    bookID++;
}

function createBook() {
    let userTitle = prompt("Enter the title of the book.");
    let userAuthor = prompt("Enter the author of the book.");
    let userPages = Number(prompt("Enter the page length of the book."));
    let userHasRead = prompt("Have you read this book? Either enter true or false, true").toLowerCase();

    const newBook = new Book(userTitle, userAuthor, userPages, userHasRead);
    addBookToLibrary(newBook);
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(bookArray) {
    bookArray.forEach(book => {
        let div = document.createElement('div');
        let title = document.createElement('h3');
        let author = document.createElement('h3');
        let pages = document.createElement('h3');
        let removeBook = document.createElement('button');
        let read = document.createElement('button');
        
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        removeBook.textContent = 'Remove from library';
        read.textContent = book.hasRead;

        div.setAttribute('data-id', String(book.id));
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(removeBook);
        div.appendChild(read);

        bookContainer.appendChild(div);
    });
}

function removeBookFromLibrary(bookID) {
    
}


