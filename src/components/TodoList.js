import Todo from "./Todo";
import {useDispatch, useSelector} from "react-redux";
import {changeEditedTodoId, completeTodo, deleteTodo} from "../actions";

function TodoList() {
    const todos = useSelector(state => state.todos);
    const currentFilter = useSelector(state => state.currentFilter);
    let activeTodos = todos.filter((todo) => todo.complete === false);
    let completeTodos = todos.filter((todo) => todo.complete !== false);
    const dispatch = useDispatch();
    let currentTodos;

    switch (currentFilter){
        case "SHOW_ALL":
           return  currentTodos = todos;
        case "SHOW_COMPLETED":
            return currentTodos = completeTodos;
        case "SHOW_ACTIVE":
            return currentTodos = activeTodos;
        default:
            return todos;
    }

    return(
        <ul>
            {todos.map(todo => <Todo key = {todo.id} todo = {todo}/>
            )}
        </ul>
    )
}

export default TodoList;