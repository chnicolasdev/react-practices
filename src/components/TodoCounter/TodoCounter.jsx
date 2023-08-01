import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter() {

  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <h2 className="title">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO's
    </h2>
  );
}

export { TodoCounter };