import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext/TodoContext';

function CreateTodoButton() {

  const {
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  let [state, setState] = React.useState(0);
  
  const createTodo = (e) => {
    console.log('Hiciste Click!')
    setState(++state); // Se actualiza el contador de click
    console.log(`Le has dado click ${state} veces!`)
  };

  return (
    <div className="createTodo-container">
      {/* <p>Le diste click {state} veces!</p> */}
      <button 
        onClick={
          (event) => 
            {
              createTodo(event)
              setOpenModal(state => !state);
            }
        }><span>+</span></button>
    </div>
  );
}

export { CreateTodoButton };