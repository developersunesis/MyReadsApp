import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  
  state = {
    books : {}
  }

  onTextChange = (event) => {
    (event.target.value.trim() !== '') ? this.searchBooks(event.target.value.trim())  : this.searchBooks()
  }
  
  searchBooks = (query) => {
    BooksAPI.search(query, 20)
      .then((data) => {
      	this.filterBooks(data)
    })
  }

  // This function to handle the books I currently have in my bookshelf
  filterBooks = (newBooks) => {
    const myReads = this.props.myReads;
    
    for(const index in newBooks){
      const book = newBooks[index]
      
      if(!book.imageLinks){
        newBooks.splice(index, 1)
      }
      
      for(const myIndex in myReads){
		  const myRead = myReads[myIndex]
          if(book.id === myRead.id){
            newBooks[index] = myRead
            break;
          }
      }
    }
    this.setState({books : newBooks})
  }

  componentDidMount() {
    this.searchBooks();
  }

  render () {
   return(
     <div>
     	<div className="search-books-bar">
     		<Link to="/" className="close-search"/>
     		<input placeholder="Search by title or author" onChange={(event) => this.onTextChange(event)}/>
     	</div>
		<SearchBooks books={this.state.books} listener={this.props.listener}/>
     </div>
   	)
  }
}

export default Search