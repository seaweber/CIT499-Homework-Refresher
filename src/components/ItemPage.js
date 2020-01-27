import React from 'react';
import {Link} from "react-router-dom";

function ItemPage ( props ) {

    const data = props.items[props.match.params.id];

    return (
        <div>
            <h1> { data.name } </h1>
            <p> { data.text } </p>
            <h3 style={{ backgroundColor: data.color }}> { data.color } </h3>
            <Link
                to={ process.env.PUBLIC_URL }
                style={{ color: 'inherit',
                         backgroundColor: 'gray',
                         textDecoration: 'none',
                         padding: '8px'
                       }} >
                Return
            </Link>
        </div>
    );
}

export default ItemPage;
