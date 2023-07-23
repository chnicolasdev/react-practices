import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {

  let [state, setState] = React.useState(0);
  
  const createTodo = (e) => {
    setState(++state);
    console.log(`N: ${state}`);
  };

  return (
    <div className="createTodo-container">
      {/* <p>Le diste click {state} veces!</p> */}
      <button 
        onClick={
          (event) => createTodo(event)
        }>+</button>
    </div>
  );
}

export { CreateTodoButton };