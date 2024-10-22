import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// import thunk from "redux-thunk";
import * as thunk from "redux-thunk"; // Importing everything as thunk

import { AuthReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./product/Reducer";
import { cartReducer } from "./cart/reducer";
import { orderReducer } from "./Order/Reducer";

// Combine all reducers
const rootReducers = combineReducers({
  auth: AuthReducer,  
  product:customerProductReducer,
  cart :cartReducer,
  order:orderReducer
});

// Create Redux store with Thunk middleware
const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

// Export the store
export default store;
