import React from 'react'
import {useSelector} from 'react-redux'
import '../ComponentStyle/TodayReportTwoCard.css'

function TodayReportTwo1() {
    const placeData = useSelector(state => state.placeData)
    return (
        placeData.location?
        <div className='TodayReportTwoCard'>
            <div className='TodayReportTwoInside'>Visibility</div>
            <div className='TodayReportTwoInsideData'>{placeData.current.vis_miles}miles</div>
        </div>
        :''
    )
}

export default TodayReportTwo1
