import todos from "./todos.json";

/**
 * Implement a finite state machine
 * @param state
 * @param action
 */
const todosReducer = (state = todos, action) => {
    let newState = state;
    switch (action.type) {
        case 'create-todo':
            newState = [
                ...state,
                action.todo
            ];
            return newState;
            break;
        case 'delete-todo':
            newState = state.filter((todo) => {
                return todo._id !== action.todo._id;
            });
            return newState;
            break;
        case 'update-todo':
            newState = state.map((oldTodo) => {
                 const theTodo = oldTodo._id === action.todo._id ? action.todo: oldTodo;
                 return theTodo;
            });
            return newState;
            break;
        case 'get-todo':
            return state;
            break;
        default:
            return state;
    }
};

export default todosReducer;