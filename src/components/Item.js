import React, { useState } from 'react';

function Item ( props ) {

    const [ background, toggleBackground ] = useState(false);

    const urlString = process.env.PUBLIC_URL + '/item/' + props.id;

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

            <div>
                <a
                    href={ urlString }
                    style={{ color: 'inherit',
                        backgroundColor: 'gray',
                        textDecoration: 'none',
                        padding: '8px'
                    }} >
                    Details
                </a>
            </div>

        </div>
    );

}

export default Item;
