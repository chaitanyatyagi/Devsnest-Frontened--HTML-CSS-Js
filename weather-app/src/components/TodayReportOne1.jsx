import React from 'react'
import '../ComponentStyle/TodayReportOneCard.css'
import {useSelector} from 'react-redux'

function TodayReportOne1() {
    const placeData = useSelector(state => state.placeData)
    return (
        placeData.location?
        <div className='TodayReportOneCard'>
            <div className='TodayReportOneInside'>Wind Status</div>
            <div className='TodayReportOneInsideData'>{placeData.current.wind_mph}mph</div>
            <div className='TodayReportOneInside'></div>
        </div>
        :''
    )
}

export default TodayReportOne1
