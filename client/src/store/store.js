import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import pictures from "./reducers/pictures";

const INITIAL_STATE = {};

const middleware = [thunk];

const rootReducer = combineReducers({
    pictures
});

const store = createStore(
    rootReducer,
    INITIAL_STATE,
    applyMiddleware(...middleware),
);
export default store;
