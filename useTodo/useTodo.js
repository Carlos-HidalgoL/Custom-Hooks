import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoRecucer";

const init = () => JSON.parse( localStorage.getItem('todos') ) || [];

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const onNewTodo = todo => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }

        dispatch(action);
    }


    const onDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Delete todo',
            payload: id
        };

        dispatch(action);
    }


    const onChangeDone = (id) => {
        const action = {
            type: '[TODO] Toggle todo',
            payload: id,
        }

        dispatch( action );
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
        onChangeDone,
        onDeleteTodo,
        onNewTodo,
    }
    
}

