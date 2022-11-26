import React from "react";
import Classes from "./classes";
import Styles from "./styles";
// import ConditionalOutputIfElse from "./conditional-output/conditional-output-if-else";
// import ConditionalOutputInline from "./conditional-output/conditional-output-inline";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";

const Lab = () => {
    return (
        <div>
            <h1>Lab</h1>
            <Styles/>
            <Classes/>
            <ConditionalOutput/>
            <TodoList/>
        </div>
    )
}

export default Lab;