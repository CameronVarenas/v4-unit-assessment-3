import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import data from './data'
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: data,
      shelf: []
    }

    this.addToShelf = this.addToShelf.bind(this)
  }


  addToShelf() {
    this.state.shelf.push(this.state.books.title)
  }

  render() {
    return (
      <div className="App">
          <Header />
        <div className='main'>
          <BookList books={this.state.books} toShelf={this.addToShelf} />
          <Shelf shelf={this.state.shelf} shelf={this.state.shelf} />
        </div>
      </div>
    );
  }
}

export default App;