import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import data from './data'
import { Component } from 'react';
import e from 'cors';
import SearchBar from './Components/SearchBar'

class App extends Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
       books: data,
       shelf: []
    }

    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
  }

  addToShelf(book) {
    const newShelfArr = [...this.state.shelf, book.title]
    this.setState({shelf: newShelfArr})
    console.log('click')
    console.log(this.state.shelf)
  }

  clearShelf() {
    this.setState({shelf: []})
    console.log('shelf clear')
    console.log(this.state.shelf)
  }

  filterBooks(input) {
    const filteredBooks = this.state.books.filter(this.books.title === input)
    this.setState({books: filteredBooks})
  }
 
  render() {
    return (
      <div className='App'>
        <Header />
        <SearchBar filterBooks={this.filterBooks}/>
        <section className='main'>
          <div>
            <h3>List</h3>
            <section class='list'>
              <BookList books={this.state.books} addToShelf={this.addToShelf}/>
            </section>
          </div>
          <div>
            <h3>Shelf</h3>
            <button onClick={() => this.clearShelf()}>Clear Shelf</button>
            <Shelf clearShelf={this.clearShelf} shelf={this.state.shelf} books={this.state.books}/>
          </div>
        </section>
      </div>
    )
  }
}

export default App