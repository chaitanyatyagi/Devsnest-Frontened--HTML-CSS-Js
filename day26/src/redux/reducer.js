const initialNameState = {
    name: ''
}

const initialEmailState = {
    email: ''
}

const nameReducer = (state=initialNameState,action) => {
    console.log(action)
    switch(action.type){
        case 'Name':
            console.log(action.text)
            return{
                ...state,
                name:action.text
            }
            default:return state
    }
}

const emailReducer = (state=initialEmailState,action) => {
    switch(action.type){
        case 'Email':
            return{
                ...state,
                email:action.text
            }
        default:return state
    }
}

export default {nameReducer,emailReducer}