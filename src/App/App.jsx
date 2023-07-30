import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../components/TodoContext/TodoContext';

function App() {

  return (
    <TodoProvider>
      <AppUI />  
    </TodoProvider>
  );
}

export { App };
