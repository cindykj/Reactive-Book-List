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
      findBook: '',

    }
  }
  
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

  foundBook(event) {
    const findBook = event.target.value;
    this.setState({ findBook })
    }

    
    
    render() {
      return (
        <div className="App">
        <NameTag name="Book Title" />
        <BookList books={this.state.bookList} findBook={this.state.findBook} />
        <NewBookForm newBook={this.newBook.bind(this)} />
        <BookFilter findBook={this.foundBook.bind(this)} />

      </div>
    )
  }
  
}
  

export default App;
