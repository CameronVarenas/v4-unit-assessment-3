import React, { Component } from 'react'

class SearchBar extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
        }

    }

    handleChange(input) {
        this.state.userInput += input
    }

    handleClick() {
        this.props.filterBooks.call(this.state.userInput)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <input onChange={this.handleChange} type='text'></input>
                <button onClick={this.handleClick}>search</button>
                <button>clear search</button>
            </div>
        )
    }
}

export default SearchBar
