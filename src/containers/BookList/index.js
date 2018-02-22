import React from 'react';
import BookListItem from '../../components/BookListItem'

const BookList = ({ books }) => {
  return (
    <div className="book-list-container">
    {
      books.map((book) => {
        return (
          <BookListItem key={ book._id } book={ book } /> //react needs a key whenever iterating, 
        )
      })
    }
    </div>
  )
}

export default BookList;
