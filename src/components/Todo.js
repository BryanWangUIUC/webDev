import React, {useLayoutEffect} from "react";

const Todo = () => {
    const todos = [
        {title:'Buy the milk'},
        {title:'Pick up the kids'},
        {title:'Walk the dig'},
        {title:'Make dinner'},
    ];
    return (
        // can only return one thing.
        <div>
            <h1>Todo</h1>
            <ul>
                {
                    todos.map((todo) => {
                        return(<li>{todo.title}</li>)
                    })
                }
                <li>Buy the milk</li>
                <li>Pick up the kids</li>
                <li>Walk the dig</li>
                <li>Make dinner </li>
            </ul>

        </div>
    );
 };

export default Todo;