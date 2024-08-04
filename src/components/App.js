import '../App.css';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import FilterBar from "./FilterBar";
import {Provider} from "react-redux";
import store from "../reducers/index";

function App() {

    return (
      <Provider store = {store}>
          <AddTodo/>
          <TodoList/>
          <FilterBar/>
      </Provider>
  )
}

export default App;
