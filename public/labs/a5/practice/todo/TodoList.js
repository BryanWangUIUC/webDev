import todoItem from "./TodoItem.js ";
import todos from "./todos.js";
import TodoItem from "./TodoItem.js ";
import todos_ from "./todos_.js";
import TodoItem_ from "./TodoItem_.js";
const TodoList = () => {
    return(`
    <ul> 
        ${
            todos.map((todo) => {
                return(
                    TodoItem(todo)
                )
            }).join('')
        }
        
        ${
        todos_.map((todo) => {
            return(
                TodoItem_(todo)
            )
        }).join('')
    }
    
        ${todoItem("Buy milk")}
        ${todoItem("Pickup the kids")}
        ${todoItem("Walk the dog")}
        
        <li>Buy milk</li> 
        <li>Pickup the kids</li> 
        <li>Walk the dog</li> 
        </ul>
    `);
}
export default TodoList;