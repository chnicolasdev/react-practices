import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm() {

  const {
    // addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  return (
    <form 
      onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder="Cortar cebolla"></textarea>
      <div className="TodoForm-buttonContainer">
        <button 
          type="button"
          className="TodoForm-button 
                    TodoForm-button--cancel"
          onClick={onCancel}
          >Cancelar</button>
        <button 
          type="submit"
          className="TodoForm-button 
                    TodoForm-button--add"
          >Añadir</button>
      </div>
    </form>
  );

}

export { TodoForm };