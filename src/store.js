import { configureStore } from "@reduxjs/toolkit";
import {ToDoListReducer} from "./reducers/ToDoListReducer";

const store = configureStore({reducer: ToDoListReducer});

export default store;