import './TodoCounter.css';

function TodoCounter({ completed , total }) {
    return (
      <h2 className="title">
        Has completado <span>{completed}</span> de <span>{total}</span> TODO's
      </h2>
    );
}

export { TodoCounter };