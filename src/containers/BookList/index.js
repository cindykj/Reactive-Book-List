import React from 'react';
import BookListItem from '../../components/BookListItem'
// import BookFilter from '../../components/BookFilterInput'

const BookList = ({ books, findBook }) => {
  return ( 
    <div className = "book-list-container" > {
      books
        .filter((books) => {
          console.log(findBook)
          return (
            books.title.indexOf(findBook) >= 0 ||
            books.author.indexOf(findBook) >= 0
          )
        }
      )
        .map((book) => {
          return ( 
            <BookListItem key = { book._id } book = {book} /> // react needs a key whenever iterating,
          )
        })
      } 
      </div>
  )
}

export default BookList;