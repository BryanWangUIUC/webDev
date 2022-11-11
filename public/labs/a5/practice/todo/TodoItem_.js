const TodoItem = (todo) => {
    return(` 
    <li>
        <input checked type="checkbox"></input>
        ${todo.title}
        (${todo.status})
      </li>
    `);
}
export default TodoItem;