import { createStore } from "redux";
import { combineReducers } from "redux";
import flower from "../moduels/flower";
import todos from "../moduels/todos";

const rootReducer = combineReducers({
    flower: flower,
    todos,
});
const store = createStore(rootReducer);

export default store;