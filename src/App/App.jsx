import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   { text: 'Cortar cebolla',     completed: true },
//   { text: 'Hacer aseo',         completed: true },
//   { text: 'Limpiar ventana',    completed: true },
//   { text: 'Ir al supermercado', completed: false }
// ];

function App() {

  // Estado input search
  const [searchValue, setSearchValue] = React.useState('');
  
  // Estado Listas Todo
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading, 
    error
  } = useLocalStorage('TODOS_V1', []);
  
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

  // Completar
  const completeTodo = (text) => {
    const newTodos  = [...todos]; // Se crea una copia del array todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text // Filtra el resultado si el text es el mismo (es la key)
    );
    
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
  // console.log(`Buscar: ${searchValue}`);

  return (
    // <h1>Hola</h1>
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export { App };
