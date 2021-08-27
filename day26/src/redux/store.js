import {nameReducer,emailReducer} from './reducer'
// import emailReducer from './reducer'
const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const rootReducer = combineReducers({
    names: nameReducer,
    email: emailReducer
})
const store = createStore(rootReducer)

export default store