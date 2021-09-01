import React,{useEffect} from 'react'
import '../style.css'
import DailyReport from './DailyReport'
import DailyReport1 from './DailyReport1'
import DailyReport2 from './DailyReport2'
import DailyReport3 from './DailyReport3'
import TodayReportOne from './TodayReportOne'
import TodayReportOne1 from './TodayReportOne1'
import TodayReportTwo from './TodayReportTwo'
import TodayReportTwo1 from './TodayReportTwo1'
import {DailyReportSearchAction,DailyReportFetchAction} from '../redux/DailyReport/DailyReportActions'
import {useSelector,useDispatch} from 'react-redux'


function Background() {
    useEffect(()=>{
        document.title = "WeatherApp"
    },[])
    const place = useSelector(state => state.place)
    const placeData = useSelector(state => state.placeData)
    const dispatch = useDispatch()
    return (
        <div className='Background'>
            <div className='Left'>
            <div className='Search'>
                <input type="text" value={place} onChange={event => {dispatch(DailyReportSearchAction(event.target.value))}}/>
                <button onClick={() => {dispatch(DailyReportFetchAction(place))}}><img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" alt="search-icon"/></button>
            </div>
            {placeData.location?<div className='LocationImage'><img src={placeData.current.condition.icon} alt="" /></div>:''}
            {placeData.location?<div className='WeatherDetail'>{placeData.current.condition.text}</div>:''}
            {placeData.location?<div className='Temperature'>{placeData.current.temp_c}&deg;C</div>:''}
            {placeData.location?<div className='Date'>{placeData.location.localtime}</div>:''}
            {placeData.location?<div className='Location'>{placeData.location.name}</div>:''}
            </div>
            <div className = 'Right'>
                <div className='ButtonConvertor'></div>
                <div className='DailyReport'>
                    <DailyReport />
                    <DailyReport1 />
                    <DailyReport2 />
                    <DailyReport3 />
                </div>
                {placeData.location?<div className='Heading'>Today's Highlight</div>:<h1>Search Your City</h1>}
                <div className='TodayReportOne'>
                    <TodayReportOne />
                    <TodayReportOne1 />
                </div>
                <div className='TodayReportTwo'>
                <TodayReportTwo />
                <TodayReportTwo1 />
                </div>
                <div className='Profile'>
                    Made By Chaitanya Tyagi<a href="https://github.com/chaitanyatyagi">@GitHub</a><a href="https://www.linkedin.com/in/chaitanya-tyagi-21964b201/">@LinkeDin</a>
                </div>
            </div>
        </div>
    )
}

export default Background
