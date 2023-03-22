import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
   switch(condition){
    case  "ADD_CAR":
        return [ ...state, action.value]
    case "REMOVE_CAR": 
        return splice(action.value, 1)

    default: 
    return state
    }
}

export default combineReducers({ user, cars })