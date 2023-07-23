import './TodoItem.css';

function TodoItem({ text, completed }) {
    return (
      <li className="todo-item">
        <span className={`check ${completed ? "check--active" : ""}`}></span>
        <p className={`${completed ? "check--active" : ""}`}>{ text }</p>
        <button className="close-item"></button>
      </li>
    );
}

export { TodoItem };