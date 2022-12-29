import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {commonReducer} from "./Reducers/common.reducer";

const rootReducer = combineReducers({
    commonReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))