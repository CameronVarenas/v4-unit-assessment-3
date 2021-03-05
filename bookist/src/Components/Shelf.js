import {Component} from 'react'

class Shelf extends Component {
    render() {
        const shelfData = this.props.shelf
        const mappedTitles = shelfData.map(book => {
            console.log()
            return(
                <li>
                    <h5>Your Shelf</h5>
                    <h5>`{book.title}`</h5>
                </li>
            )
        })

        return mappedTitles
    }
}

export default Shelf