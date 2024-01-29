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
    var i = 0;
    myLibrary.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('book');
        div.textContent = element.title + "\r\n \r\n by " + element.author;
        div.setAttribute("id", i.toString());
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteBook);
        div.appendChild(deleteButton);
        bookShelf.appendChild(div);
        i++;
    });
}

function deleteBook(event) {
    myLibrary.splice(parseInt(event.target.parentNode.id), 1);
    updateBookshelf();
}

const bookShelf = document.querySelector("#bookshelf");

const submitButton = document.querySelector("#submitBook");

submitButton.addEventListener("click", createBook);