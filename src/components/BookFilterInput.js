import React from 'react';

const BookFilter = ({ findBook }) => {

  return (
    <div>
      <input type="text" onChange={ findBook } placeholder="search"/> 
    </div>
  )

}

export default BookFilter;