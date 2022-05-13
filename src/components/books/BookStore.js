import React from 'react'
import { BookList } from '../../DummyBookList'

export const BookStore = () => {
  return (
    <div className="book">
    <ul>
      {BookList.map((book) => (
        <li key={book.SID}>{book.name}</li>
      ))}
    </ul>
  </div>
  )
}
