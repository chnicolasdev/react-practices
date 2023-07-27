import React from 'react';
import './TodosLoading.css';

function TodosLoading() {

  return (
    <>
        <div className="todo-item loading">
            <span className="check--active"></span>
            <p className="check--active"></p>
            <span className="close-item"></span>
        </div>
            <div className="todo-item loading">
            <span className="check--active"></span>
            <p className="check--active"></p>
            <span className="close-item"></span>
        </div>
        <div className="todo-item loading">
            <span className="check--active"></span>
            <p className="check--active"></p>
            <span className="close-item"></span>
        </div>
    </>
  );
}

export { TodosLoading };