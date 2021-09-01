import React from 'react'
import {useSelector} from 'react-redux'
import '../ComponentStyle/TodayReportTwoCard.css'

function TodayReportTwo() {
    const placeData = useSelector(state => state.placeData)
    return (
        placeData.location?
        <div className='TodayReportTwoCard'>
            <div className='TodayReportTwoInside'>Air Pressure</div>
            <div className='TodayReportTwoInsideData'>{placeData.current.pressure_mb}mb</div>
        </div>
        :''
    )
}

export default TodayReportTwo
