const data = [
    {_id:'123', do:'Walk dog', done:'fasle'},
    {_id:'234', do:'Buy milk', done:'true'},
    {_id:'345', do:'Pick up the kid', done:'in progress'}
];

const todoReducer = (state=data, action) => {
     switch (action.type) {
         case 'create-todo':
             return [
                 ...state,
                 {
                     _id: (new Date()).getTime() + ' ',
                     ...action.todo
                     //  do: 'new todo',
                     // done: "fasle"
                 }
             ]
             break;
         case 'delete-todo':
             return state.filter(todo => todo !== action.todo);
             break;
         case 'update -todo':
             break;
         default:
             return state;
     };
};

export default  todoReducer;