import React from 'react';
import './card-styles.css';
const Card = ({monster}) => {
    const {id, name, email} = monster;
    return (
        <div className='card-container'>
            <img alt={`monster${name}`}
                src={`https://robohash.org/${id}?set=set2&size=250x250`}></img>
                <h2>{name}</h2>
                <h2>{email}</h2>
        </div>
    );
}

export default Card;