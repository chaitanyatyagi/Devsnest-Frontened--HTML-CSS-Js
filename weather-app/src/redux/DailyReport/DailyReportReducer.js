
const DailyReportSearchReducer = (state = '', action) => {
    switch(action.type){
        case 'UPDATE_PLACE':
            return action.payload
            default:
                return state
    }
}

const DailyReportFetchReducer = (state={},action) => {
    switch(action.type){
        case 'UPDATE_PLACE_DATA':
            return action.payload
        default:
            return state
    }
}

export {DailyReportSearchReducer,DailyReportFetchReducer}