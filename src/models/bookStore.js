
//DataStore for this Demo

export default class BookStore {

  nextId = 4;

  constructor() {

    this._books = [];
    this.fetchBooks();
  }

  fetchBooks() {
    fetch("http://localhost:7777/books")
      .then((response) => response.json())
      .then((response) => {
        this._books = response;
        console.log(JSON.stringify(this._books))
      })
  }

  /*nextID = function() {
    return nextId++;
  } */

  get books() {
    return this._books;
  }
  /*
    add = function (book) {
      book.id = this.nextId();
      this._books.push(book);
    }
  
    delete = function (book) {
      this._books.remove(book);
    }
  
    update = function(book) {
      this._books.forEach((value) => {
        if (book.id === value.id) {
          this._books.remove(value);
        }
      })
      this._books.push(book);
    }
    */
}

