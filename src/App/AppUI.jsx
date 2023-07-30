// import React from 'react';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodosLoading } from '../components/TodosLoading/TodosLoading';
import { TodosError } from '../components/TodosError/TodosError';
import { EmptyTodos } from '../components/EmptyTodos/EmptyTodos';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { TodoContext } from '../components/TodoContext/TodoContext';

function AppUI() {  
    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
                {({
                    loading,
                    error,
                    searchedTodos,
                    completeTodo,
                    deleteTodo
                }) => (
                    <TodoList>
                    {loading && (
                        <>
                            <TodosLoading />
                            <TodosLoading />
                            <TodosLoading />
                        </>
                    )}
                    {error && <TodosError />}
                    {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

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
                )}
            </TodoContext.Consumer>

            <CreateTodoButton />
        </>
    );
}

export { AppUI };