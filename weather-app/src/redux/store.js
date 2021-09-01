import { DailyReportFetchReducer } from "./DailyReport/DailyReportReducer";
import { DailyReportSearchReducer } from "./DailyReport/DailyReportReducer";
import {applyMiddleware, combineReducers} from "redux"
import { createStore } from "redux";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    place : DailyReportSearchReducer,
    placeData: DailyReportFetchReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store