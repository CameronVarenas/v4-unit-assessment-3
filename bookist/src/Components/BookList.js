import {Component} from 'react'

class List extends Component {
    render() {
        const bookData = this.props.books
        const mappedBooks = bookData.map(book => {

            return(
                <li key={book.id} class='listedBook'>
                    <button onClick={this.props.addToShelf}>
                        <img src={book.img} alt='book-thumbnail' class='img'/>
                    </button>
                    <h5>{book.title} by {book.author}</h5>
                </li>
            )
        })

        return mappedBooks
    }
}

export default List