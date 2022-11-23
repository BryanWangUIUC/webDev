import React, {useLayoutEffect} from "react";
import TodoItem from "./TodoItem";

const Todo = (
    {
        todos = [
            {title:'Todo 1'},
            {title:'Todo 2'},
            {title:'Todo 3'},
            {title:'Todo 4'},
            {title:'Todo 5'},
        ]
    }) => {
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
                <TodoItem todo={{title:'Buy the milk', status:'completed'}}/>
                <TodoItem todo={{title:'Pick up the kids', status:'completed'}}/>
                <TodoItem todo={{title:'Walk the dig', status:'completed'}}/>
                <TodoItem todo={{title:'Make dinner', status:'completed'}}/>
                {
                    todos.map((todo) => {
                        return(<TodoItem todo={todo}/>)
                    })
                }
            </ul>

        </div>
    );
 };

export default Todo;