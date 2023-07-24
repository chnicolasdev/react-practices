import React from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla',     completed: true },
  { text: 'Hacer aseo',         completed: true },
  { text: 'Limpiar ventana',    completed: false },
  { text: 'Ir al supermercado', completed: false }
];

function App() {

  // Estado input search
  const [searchValue, setSearchValue] = React.useState('');
  
  // Estado Listas Todo
  const [todos, setTodos] = React.useState(defaultTodos);
  
  // Se recorren los todos (del defaultTodos) y si tiene completed true, se retorna.
  const completedTodos  = todos.filter(
                                  todo => !!todo.completed // Por cada completed, se agrega al array, la doble negación, convierte en boleano
                          ).length; // Se ve el tamaño del array

  // Se cuentan todos los todos que se crearon arriba.
  const totalTodos = todos.length; 
  
  // Input searchValue
  console.log(`Buscar: ${searchValue}`);

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map( todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
