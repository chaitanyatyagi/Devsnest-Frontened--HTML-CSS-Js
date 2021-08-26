const initialNameState = {
    name: ''
}

const initialEmailState = {
    Email: ''
}

const nameReducer = (state=initialNameState,action) => {
    switch(action.type){
        case 'Name':
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
                name:action.text
            }
        default:return state
    }
}

export default {nameReducer,emailReducer}