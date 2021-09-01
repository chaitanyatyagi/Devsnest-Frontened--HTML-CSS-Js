import axios from 'axios'

const DailyReportSearchAction = (place) => {
    return {
        type:'UPDATE_PLACE',
        payload:place
    }
}

const DailyReportFetchAction = (place) => {
    return function(dispatch){
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=759dd083130c481f8ab184810213108&q=${place}&days=4`)
        .then(response => {
            const placeData = response.data
            // console.log(placeData)
            dispatch({
                type:'UPDATE_PLACE_DATA',
                payload:placeData
            })
        })
    }
}

export {DailyReportFetchAction,DailyReportSearchAction}