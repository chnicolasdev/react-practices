import React from 'react';
import './TodoSearch.css';
import searchIcon from '../../assets/search-icon.svg';

function TodoSearch({ searchValue, setSearchValue }) {

  return (
    <div className="search-container">
        <input 
          placeholder="Cortar cebolla" 
          value={searchValue}
          onChange={
            (event) => setSearchValue(event.target.value)
          }
        />
        <img className="search-icon" src={searchIcon} alt="search icon" />
    </div>
  );
}

export { TodoSearch };