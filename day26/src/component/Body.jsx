import React from 'react'
// import {connect} from 'react-redux'
import {typeName,typeEmail} from '../redux/action'
import {useSelector,useDispatch} from 'react-redux'
import './style.css'

function Body() {
    const {name} = useSelector(state => state.names)
    const {email} = useSelector(state => state.email)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <h1>Steps</h1>
                <li>Create a user state using redux</li>
                <li>Update user state when input is changed</li>
                <li>Create a seperate component and display user data(Don't Pass it as Props)</li>
            </div>
            <div>
                <h2>Input</h2>
                <input type="text" placeholder="type your name" onChange={(event) => dispatch(typeName(event.target.value))}/>
                <input type="text" placeholder="type your email" onChange={(event) => dispatch(typeEmail(event.target.value))}/>
            </div>
            <div>
                <h1>Data</h1>
                <p>Name :- {name}</p>
                <p>Email :- {email}</p>
            </div>
        </div>
    )
}

// const map1StateToProps = state => {
//     return {
//         name : state.name
//     }
// }

// const map2StateToProps = state => {
//     return {
//         email : state.email
//     }
// }

// const map1DispatchToProps = dispatch => {
//     return {
//         typeName: (event) => dispatch(typeName(event.target.value))
//     }
// }

// const map2DispatchToProps = dispatch => {
//     return {
//         typeEmail: (event) => dispatch(typeEmail(event.target.value))
//     }
// }

// connect(map1StateToProps,map1DispatchToProps)(Body)
// connect(map2StateToProps,map2DispatchToProps)(Body)
export default Body
