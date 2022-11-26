import React from "react";
import Hello from "./Hello";
import helloReducer from "./HelloReducer";
import counterReducer from "./counterReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import Counter from "./Counter";
import BankAccount from "./BankAccount";
import bankAccountReducer from "./bankAccountReducer";
import Todos from "./Todo";
import todoReducer from "./todoReducer";

const mainReducer = combineReducers({
    hello: helloReducer,
    count: counterReducer,
    account:bankAccountReducer,
    todos: todoReducer
})

const store = createStore(mainReducer);

const ReduxExample = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>My App</h1>
                <Hello/>
                <Counter/>
                <BankAccount/>
                <Todos/>
            </div>
        </Provider>
    );
};

export default ReduxExample;