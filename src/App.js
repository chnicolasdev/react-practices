import React from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

// const defaultTodos = [
//   { text: 'Cortar cebolla',     completed: true },
//   { text: 'Hacer aseo',         completed: true },
//   { text: 'Limpiar ventana',    completed: true },
//   { text: 'Ir al supermercado', completed: false }
// ];

function App() {

  // Se parsea desde localStorage (de string a json)
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);

  }

  // Estado input search
  const [searchValue, setSearchValue] = React.useState('');
  
  // Estado Listas Todo
  const [todos, setTodos] = React.useState(parsedTodos);
  
  // Se recorren los todos (del defaultTodos) y si tiene completed true, se retorna.
  const completedTodos  = todos.filter(
                                  todo => !!todo.completed // Por cada completed, se agrega al array, la doble negación, convierte en boleano
                          ).length; // Se ve el tamaño del array

  // Se cuentan todos los todos que se crearon arriba.
  const totalTodos = todos.length; 

  // Filtrar busqueda de Todo's
  const searchedTodos = todos.filter( // Se filtra para devolver todas las coincidencias
    (todo) => { // Por cada todo
      const todoText    = todo.text.toLowerCase();
      const searchText  = searchValue.toLowerCase();
      return todoText.includes(searchText); // Si el texto incluye lo que estamos buscando
    }
  );

  // Guardar estado y en localStorage
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  // Completar
  const completeTodo = (text) => {
    const newTodos  = [...todos]; // Se crea una copia del array todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text // Filtra el resultado si el text es el mismo (es la key)
    );
    // newTodos[todoIndex].completed === true
    //   ? (newTodos[todoIndex].completed = false)
    //   : (newTodos[todoIndex].completed = true);
    if (newTodos[todoIndex].completed === true) {
      newTodos[todoIndex].completed = false
      console.log(`Se completa: ${text}`);
    } else {
      newTodos[todoIndex].completed = true
      console.log(`Se retoma: ${text}`);
    }
    saveTodos(newTodos)
  }

  // Eliminar
  const deleteTodo = (text) => {
    const newTodos  = [...todos]; // Se crea una copia del array todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1); // Elimina la posición
    saveTodos(newTodos)
    console.log(`Se elimina: ${text}`);
  }
  
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
        {searchedTodos.map( todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={
              () => completeTodo(todo.text)
            }
            onDelete={
              () => deleteTodo(todo.text)
            }
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
