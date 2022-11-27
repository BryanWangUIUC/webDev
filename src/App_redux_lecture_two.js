import "./App.css"
import TodosRedux from "./redux-examples/components/Todos"
import todosReducer from "./redux-examples/reducers/todosReducer";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(todosReducer);
function AppRedux() {
    return (
        <Provider store={store}>
            <div>
                <TodosRedux/>
            </div>
        </Provider>
    );
};

export default AppRedux;