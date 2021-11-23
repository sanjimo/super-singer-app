import React from 'react';
import './List.css';

const List = (props) => {
    const {name} = props;
    return (
        <div className="list-container">
            <h6><span className="list-heading"></span>{name}</h6>
        </div>
    );
};

export default List;