import React from 'react'

function Shelf(props) {
    console.log(props.shelf)
    let mappedTitles = props.shelf.map(title => {
        return (
            <div>
                <li className='listed-book'>
                    <h5>{title}</h5>
                </li>
            </div>
        );
    })

    return mappedTitles;
}

export default Shelf