
import logger from "redux-logger";
import {createStore,combineReducers,applyMiddleware} from "redux";
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";


//const store = createStore(combineReducers({ mathReducer, userReducer }), {}, applyMiddleware(myLogger, logger));
export default createStore(combineReducers({math, user }), {}, applyMiddleware( logger));


