import{legacy_createStore as createStore,combineReducers} from "redux";

import countReducer from "./countReducer"
import busketReducer from "./busketReducer"

const rootReducer = combineReducers({
    stateCount:countReducer,
    stateProduct:busketReducer
})
export const store = createStore(rootReducer)

