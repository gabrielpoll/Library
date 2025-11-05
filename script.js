let mainContainer = document.querySelector('.main')
let newBookButton = document.getElementById('new-book')
let modalForm = document.querySelector('.modal')
let CancelBookForm = document.querySelector('.cancel-book-form')

newBookButton.addEventListener('click', function(e) {
    modalForm.style.display = 'block';
});

CancelBookForm.addEventListener('click', function(e) {
    modalForm.style.display = 'none';
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
    myLibrary.push(newBook);

};

function loopThroughArray() {
    for(let index = 0; index < myLibrary.length; index++) {
        let card = document.querySelector(".card").cloneNode(true);
        card.querySelector(".title-text").textContent = myLibrary[index].title;
        card.querySelector(".author").textContent = myLibrary[index].author;
        card.querySelector(".pages").textContent = myLibrary[index].pages;

        mainContainer.appendChild(card);
    };
};

addBookToLibrary("The hobbit", "J.R.R", 295, "read");

loopThroughArray();





