const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBook(Book) {
    myLibrary.push(Book);
}

function createBook(event){
    let bookName = document.querySelector("#name");
    let bookAuthor = document.querySelector("#author");
    let newBook = new Book(bookName.value, bookAuthor.value);
    addBook(newBook);
    updateBookshelf();
    event.preventDefault();
}

function updateBookshelf () {
    bookShelf.innerHTML = "";
    myLibrary.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('book');
        div.textContent = element.title + "\r\n \r\n by " + element.author;
        bookShelf.appendChild(div);
    });
}

const bookShelf = document.querySelector("#bookshelf");

const submitButton = document.querySelector("#submitBook");

submitButton.addEventListener("click", createBook);