import './TodoSearch.css';

function TodoSearch(props) {
    return (
      <div className="search-container">
          <input 
            placeholder="Cortar cebolla" 
          />
          {/* <img className="search-icon" alt="search icon"></img> */}
      </div>
    );
}

export { TodoSearch };