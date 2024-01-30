const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function createBook(event){
    let bookName = document.querySelector("#name");
    let bookAuthor = document.querySelector("#author");
    let newBook = new Book(bookName.value, bookAuthor.value);
    myLibrary.push(newBook);

    const div = document.createElement('div');
    div.setAttribute("id", (myLibrary.length - 1).toString())
    const title = document.createElement('p');
    div.appendChild(title);
    const author = document.createElement('p');
    div.appendChild(author);
    div.classList.add('book');
    title.textContent = newBook.title;
    author.textContent = "by " + newBook.author;
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute("id", "delete");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteBook);
    const readButton = document.createElement('button');
    readButton.setAttribute("id", "read");
    readButton.textContent= "Read";
    readButton.addEventListener("click", readBook);
    div.appendChild(deleteButton);
    div.appendChild(readButton);
    bookShelf.appendChild(div);

    event.preventDefault();
}

function deleteBook(event) {
    myLibrary.splice(parseInt(event.target.parentNode.id), 1);
    event.target.parentNode.remove();
    
    books = bookShelf.getElementsByClassName("book");    
    for (var i = 0; i < books.length; i++) {
        books[i].setAttribute("id", i.toString());
    }
}

function readBook(event) {
    let hiddenBook = event.target.parentNode;
    hiddenBook.style.opacity = '0.5';
}

const bookShelf = document.querySelector("#bookshelf");

const submitButton = document.querySelector("#submitBook");

submitButton.addEventListener("click", createBook);