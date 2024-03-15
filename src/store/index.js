import { combineReducers, createStore } from "redux";

import usersReducer from "../components/reducer/users";
import todoReducer from "../components/reducer/todos";

const rootReducer = combineReducers({
  users: usersReducer,
  todos: todoReducer,
});

const store = createStore(rootReducer);

export default store;
