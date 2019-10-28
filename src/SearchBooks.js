import React from 'react'
import BookCard from './BookCard'

function SearchBooks(props) {
  return (
  	<div className="search-books-results">
    	<ol className="books-grid">
			{((props.books) && props.books.length > 0) ? (props.books.map((book) => (
            	<li key={book.id}>
					<BookCard book={book} onOptionChanged={props.listener}/>
                </li>
        		))) : <center>No books with such title or author</center>
			}
		</ol>
    </div>
  )
}

export default SearchBooks