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
        console.log(myLibrary[index]);
    };
};

addBookToLibrary("poll", "gabriel", 295, "read");

loopThroughArray();





