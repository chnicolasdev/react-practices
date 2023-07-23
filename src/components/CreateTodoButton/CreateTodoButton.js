import './CreateTodoButton.css';

function CreateTodoButton() {
  
  const createTodo = (e) => {
    console.log(e.target);
  };

  return (
    <div className="createTodo-container">
      <button onClick={(event) => createTodo(event)}>+</button>
    </div>
  );
}

export { CreateTodoButton };