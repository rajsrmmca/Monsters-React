import React from 'react';
import './search-box-styles.css';

const SearchBox = ({className, placeholder, onChangeHandler})=>{
    return (
        <>
        <input
        className={`search-box ${className}`}
        type="serach"
        placeholder={placeholder}
        onChange={onChangeHandler} />
        </>
    )
}

export default SearchBox;