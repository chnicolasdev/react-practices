import './TodoCounter.css';

function TodoCounter({ completed , total }) {
    return (
      <h2 className="title">
        Has completado <span>{completed}</span> de {total} TODO's
      </h2>
    );
}

export { TodoCounter };