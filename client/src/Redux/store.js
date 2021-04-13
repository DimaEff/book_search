import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import bookReducer from "./book_reducer";


let reducers = combineReducers({
    books: bookReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
window.store = store