import React from 'react';
import Card from '../card/card-components';
import './card-list-styles.css';

const CardList = ({monsters}) => {
    return (
        <div className='card-list'>
            {monsters.map(monster=>{
                return <Card key={monster.id} monster={monster}></Card>
            })}
        </div>
    );
};

export default CardList;