import React from 'react';
import './TodoSearch.css';
import searchIcon from '../../assets/search-icon.svg';

function TodoSearch(props) {

  // Estado
  const [searchValue, setSearchValue] = React.useState('');

  // Función para capturar los eventos
  const searchTodo = (e) => {
    setSearchValue(e.target.value);
    console.log(`Los usuarios buscan: ${e.target.value}`);
  }

  return (
    <div className="search-container">
        <input 
          placeholder="Cortar cebolla" 
          value={searchValue}
          onChange={
            (event) => searchTodo(event)
          }
        />
        <img className="search-icon" src={searchIcon} alt="search icon" />
    </div>
  );
}

export { TodoSearch };