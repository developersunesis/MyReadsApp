import React from 'react'
import BookCard from './BookCard'

// Functional Component
function Shelf(props) {
  
  // Destructure props
  const { shelfTitle, books, onOptionChanged } = props
  
  return (
	<div>
    	<div className="bookshelf">
			<h2 className="bookshelf-title">{shelfTitle}</h2>
			<div className="bookshelf-books">
            	<ol className="books-grid">
					{(props.books.length > 0) ? (books.map((book) => (
                		<li key={book.id}>
							<BookCard book={book} onOptionChanged={onOptionChanged}/>
                      	</li>
                          ))) : <center>No books available in this shelf</center>
					}
				</ol>
			</div>
		</div>
	</div>
  )
}

export default Shelf