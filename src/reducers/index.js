import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import todos from "./todos"
import todoFilters from "./todoFilters"
import editedTodoId from "./editedTodoId";

const preloadedState = {
    currentFilter : "ShowAll",
    editedTodoId: null,
    todos : [
        {
            id : 0,
            text : "Add some todos!",
            complete : false,
        },
    ],
};

const todoApp = combineReducers({editedTodoId, todos, todoFilters});

const store = configureStore({reducer: todoApp, preloadedState});

export default store;
