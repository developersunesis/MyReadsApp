import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Home'
import { Route, Link } from 'react-router-dom'
import Search from './Search'

class BooksApp extends React.Component {

    state = {
      books : []
    }

	onOptionChanged = (value, bookId) => {
        return BooksAPI.get(bookId)
        .then((book) => {
          this.updateBook(book, value)
        });
    }

    addNewBook = (history, value, bookId) => {
      this.onOptionChanged(value, bookId)
      .then(() => {
          history.push('/')
        })
    };

	refreshBooks = () => {
      BooksAPI.getAll()
      .then((books) => (
        this.setState(
      		{ books : books }
          )
       ))
    }

	updateBook = (book, shelf) => {
      	BooksAPI.update(book, shelf)
      	.then(() => this.refreshBooks())
    }

	componentDidMount () {
      this.refreshBooks()
    }

    render() {
      return (
        <div className="app">
         	<Route exact path="/" render={() => (
          		<div className="container">
      				<Home state={this.state} listener={this.onOptionChanged}/>
				    <Link to='search' className="open-search">Add Book</Link>
				</div>
			)}
			/>
			
			<Route path="/search" render={( { history }) => (
              	<Search myReads={this.state.books} listener={(value, bookId) => this.addNewBook(history, value, bookId)}/>
           	)}
            />
              
        </div>
      )
    }
}

export default BooksApp
