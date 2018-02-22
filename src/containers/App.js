import React, { Component } from 'react';
import './App.css';
import NameTag from '../components/NameTag';
import BookList from '../containers/BookList/index';
import NewBookForm from '../containers/NewBookForm/index';
import BookFilter from '../components/BookFilterInput';

import {getBooksFromFakeXHR as getBooks} from '../lib/books.db';
import {addBookToFakeXHR as addBook} from '../lib/books.db';
// import {getBookByIdFromFakeXHR as getBookById} from '../lib/books.db';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookList : [],
      search: '',

    }
  }
  // insert handleChange here!
  
  componentDidMount() {
    getBooks()
    .then(result => {
      this.setState({ 
        // bookList // typing just as bookList sets new key on object (shorthand)
        bookList: result
      })
    })
  }

  newBook(book){ //this is adding to the database
    let brandNewBook = {
      title: book.title,
      author: book.author
    }
    addBook(brandNewBook)
    .then(result => {
      this.setState({ bookList: result })
    })
  }

  search() {
    getBooks()
    .then(result => {

    })
  }
  
  
  // insert handleChange(event) here
  render() {
    return (
      <div className="App">
        <NameTag name="Book Title" />
        <BookList books={this.state.bookList} />
        <NewBookForm newBook={this.newBook.bind(this)} />

      </div>
    );
  }
}


export default App;
