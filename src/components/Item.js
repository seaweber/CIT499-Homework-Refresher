import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Item ( props ) {

    const [ background, toggleBackground ] = useState(false);

    return (
        <div
            style={{
                backgroundColor: background ? props.color : '',
                userSelect: 'none',
                padding: '8px'
            }}
            onClick={ () => toggleBackground( !background ) }
        >
            <h1> { props.name } </h1>

            <Link to={ '/item/' + props.id }>Item Link</Link>

        </div>
    );

}

export default Item;
