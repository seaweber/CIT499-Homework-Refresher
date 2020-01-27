import React from 'react';

function ItemPage ( props ) {

    const data = props.items[props.match.params.id];

    return (
        <div>
            <h1> { data.name } </h1>
            <p> { data.text } </p>
            <h3 style={{ backgroundColor: data.color }}> { data.color } </h3>
            <a
                href={ '/' }
                style={{ color: 'inherit',
                         backgroundColor: 'gray',
                         textDecoration: 'none',
                         padding: '8px'
                       }} >
                Return
            </a>
        </div>
    );
}

export default ItemPage;
