import './TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
      <li className="todo-item">
        <span 
          className={`check ${completed ? "check--active" : ""}`}
          onClick={onComplete}
        ></span>
        <p className={`${completed ? "check--active" : ""}`}>{ text }</p>
        <button 
          className="close-item"
          onClick={onDelete}
        ></button>
      </li>
    );
}

export { TodoItem };