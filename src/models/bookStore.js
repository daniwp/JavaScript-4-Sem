class BookStore {

  nextId = 5;

  nextID() {
    return this.nextId++;
  }

  constructor() {
    this._books = [];
    this.fetchBooks();
    this._observer = null;
  }
  get books() {
    return this._books;
  }

  subscribe(observer) {
    this._observer = observer;
  }

  getBook(id) {
    return this._books.filter((book) => {
      return book.id === Number(id);
    })[0];
  }

  addBook = (title, info, moreInfo) => {
    this._books.push({
      id: this.nextID(),
      title: title,
      info: info,
      moreInfo: moreInfo
    });
    this._observer.dataReady();
  }

  editBook(book) {
    this._books.remove(this._books[book.id]);
    this._books.push(book);
  }

  deleteBook(book) {
    console.log("deleting")
    var index = this._books.indexOf(book);
    this._books.splice(index, 1);
    this._observer.dataReady();
  }

  fetchBooks = () => {
    fetch("http://localhost:7777/books")
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this._books = response;
        console.log("Got books from server");
        if (this._observer) {
          this._observer.dataReady();
        }
      })
  }
}

export default new BookStore();