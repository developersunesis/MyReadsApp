import React, { Component } from 'react'

class BookCard extends Component {
    
    returnEventWithBookId = (listener, event, id) => {
        listener(event.target.value, id)
    }

	render() {
     	const { book, onOptionChanged } = this.props

  		const { id, title, authors, imageLinks, shelf, publisher} = book

        return (
          <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select value={(!shelf) ? 'none' : shelf} onChange={(event) => this.returnEventWithBookId(onOptionChanged, event, id)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
            </div>
            <div className="book-title">{title}</div>
			
            <div className="book-authors">{
				// Replace author with publisher if book doesn't have a specific list of authors 
				(!authors) ? publisher : authors.map((author, index) => (<span key={index}>{author}<br/></span>) 
			)}</div>
          </div>
        )
	}
}

export default BookCard