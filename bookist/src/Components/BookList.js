import React from 'react'

function BookList(props) {

    const mappedBooks = props.books.map(book => {
        return (
            <div>
                <li key={book.id} className='listed-book'>
                    <img src={book.img} alt='book-thumbnail' class='img' onClick={() => props.addToShelf(book)}/>
                    <h5>{book.title} by {book.author}</h5>
                </li>
            </div>
        );
    })

    return mappedBooks;
}

export default BookList
