let mainContainer = document.querySelector('.main')
let cardTemplate = document.querySelector(".card").cloneNode(true);
let newBookButton = document.getElementById('new-book')
let modalForm = document.querySelector('.modal')
let CancelBookForm = document.querySelector('.cancel-book-form')
let removeButtonBook = document.getElementById('remove-button');


document.querySelector('.card').style.display = 'none';


newBookButton.addEventListener('click', function(e) {
    modalForm.style.display = 'block';
});

CancelBookForm.addEventListener('click', function(e) {
    modalForm.style.display = 'none';
});

modalForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById('book-pages').value;
    const read = document.getElementById('book-read').checked;

    addBookToLibrary(title, author, pages, read);
    loopThroughArray();
});

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ID:${this.id}, ${this.read}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    let bookID = newBook.id;
    newBook['id'] = bookID;
    myLibrary.push(newBook);
};

function loopThroughArray() {
    
    mainContainer.innerHTML = '';
    for(let index = 0; index < myLibrary.length; index++) {
        let card = cardTemplate.cloneNode(true);
        card.querySelector(".title-text").textContent = myLibrary[index].title;
        card.querySelector(".author").textContent = myLibrary[index].author;
        card.querySelector(".pages").textContent = myLibrary[index].pages;
        card.querySelector(".book-id").textContent = myLibrary[index].id;
        if (myLibrary[index].read === true) {
            card.querySelector('.read-checkbox').checked = true; 
        };

        mainContainer.appendChild(card);
    };
};






