import React from 'react'
import '../ComponentStyle/TodayReportOneCard.css'
import {useSelector} from 'react-redux'

function TodayReportOne() {
    const placeData = useSelector(state => state.placeData)
    return (
        placeData.location?
        <div className='TodayReportOneCard'>
            <div className='TodayReportOneInside'>Humidity</div>
            <div className='TodayReportOneInsideData'>{placeData.current.humidity}%</div>
            <div className='TodayReportOneInside'></div>
        </div>
        :''
    )
}

export default TodayReportOne
