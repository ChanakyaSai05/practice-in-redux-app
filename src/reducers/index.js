import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import searchReducer from "./search";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  search: searchReducer,
});
export default allReducers;
