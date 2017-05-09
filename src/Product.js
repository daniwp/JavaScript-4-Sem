import React from "react";
import { Link } from "react-router";
import Modal from "react-modal";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.props.route.bookStore.subscribe(this);
    //This will read books from the server each time user navigates to
    //The product page (a simple way to ensure "updated data")
    this.props.route.bookStore.fetchBooks();

    this.state = {
      modalIsOpen: false,
      title: 'Title',
      info: 'Info',
      moreInfo: 'More Info'
    };

    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  dataReady = () => {
    this.forceUpdate();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }


  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addBook(bookStore) {
    bookStore.addBook(this.state.title, this.state.info, this.state.moreInfo);
    this.setState({
      modalIsOpen: false
    })
  }

  render() {
    const books = this.props.route.bookStore.books;
    const bookStore = this.props.route.bookStore;


    return (
      <div>
        <h3>All our great books </h3>
        <button onClick={() => this.openModal()}>Add new book</button>
        <ul>
          {books.map((book) => <li key={book.id}>
            {book.title} <Link to={`products/details/${book.id}`}>(details)</Link>
            <button onClick={() => bookStore.deleteBook(book)} >Remove</button></li>)}
        </ul>
        <div>
          <Modal isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Add Book">
            <h2> Add Book</h2>

            <div> Please fill all the inputs to make a new book</div>
            <input name="title" value={this.state.title} onChange={this.handleChange} type="text" />
            <input name="info" value={this.state.info} onChange={this.handleChange} type="text" />
            <input name="moreInfo" value={this.state.moreInfo} onChange={this.handleChange} type="text" />
            <button to={'products'} onClick={() => this.addBook(bookStore)}>Add new Book</button>
            <button onClick={this.closeModal}>Close</button>
          </Modal>
        </div>
      </div>
    )
  }
}