import React from 'react'
import Shelf from './Shelf'

function Home(props){
  
    const shelves = [
      { name : 'currentlyReading', title: "Currently Reading"},
      { name : 'wantToRead', title: "Want to Read"},
      { name : 'read', title:"Read"}
	]
    
	// Destruture 'props' and obtain boooks
	const { state, listener } = props
    const { books } = state;
  
	return (
      <div className="list-books">
      	<div className="list-books-title">
        	<h1>MyReads</h1>
        </div>
      	<div>
      		{shelves.map((shelf) => (
      			// Use 'onOptionChanged' from thr linteners
      			<Shelf key={shelf.name} shelfTitle={shelf.title} books={books.filter((book) => ( book.shelf === shelf.name))} onOptionChanged={listener}/>
			))}
		</div>
      </div>
    )
}

export default Home