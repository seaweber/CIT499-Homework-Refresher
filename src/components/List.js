import React from 'react';
import Item from './Item';

function List ( props ) {

    const mapItems = () => {
        return props.items.map( ( item, index) => {
            return <Item
                    name={item.name}
                    color={item.color}
                    id={index}
                    key={index} />
        });
    };

    return (
        mapItems()
    );

}

export default List;
