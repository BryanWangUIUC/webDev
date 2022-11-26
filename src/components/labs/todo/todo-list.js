import React from "react";
import todos from "./todos.json";
import TodoItem from "./todo-item";

const TodoList = () => {
    return (
        <>
            <h2>Todo List</h2>
            <ul>
                {
                    todos.map(todo => {
                        return(<TodoItem todo={todo}/> );
                    })
                }
            </ul>
        </>
    );
};

export default TodoList