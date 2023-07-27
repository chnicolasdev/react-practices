// import React from 'react';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {  
    return (
        <>
            <TodoCounter 
                completed={completedTodos} 
                total={totalTodos} 
            />

            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {loading && <p>Estamos cargando</p>}
                {error && <p>ERROR!</p>}
                {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO!</p>}

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

export { AppUI };