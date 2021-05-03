import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {pizzaReducer} from "./pizzaReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import filtersReducer from "./filtersReducer";
import {cartReducer} from "./cartReducer";


const rootReducer = combineReducers({
    pizza: pizzaReducer,
    filters: filtersReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


