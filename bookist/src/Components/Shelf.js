import React from 'react'

function Shelf(props) {

    const mappedTitles = props.shelf.map(shelf => {
        return (
            <div>
                <li className='listed-book'>
                    <h5>{shelf}</h5>
                </li>
            </div>
        )
    })

    return mappedTitles
}

export default Shelf