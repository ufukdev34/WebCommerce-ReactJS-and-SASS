import * as ACTIONS from './actions'
import {combineReducers} from 'redux'
const fetchState = {
    categories : [],
    queriedProducts : [],
    fetchedCategory : [],
    productByID: {}
}
/* const initialState2 = {
    
} */
const fetchReducer = (state = fetchState, action) =>{
    switch (action.type) {
        case ACTIONS.FETCH_CATEGORIES:
            return {...state,categories : action.payload}
        case ACTIONS.FETCH_CATEGORY:
            return {...state,fetchedCategory : action.payload}
        case ACTIONS.FETCH_PRODUCTS_BY_CATEGORIES:
            return {...state,queriedProducts : action.payload}
        case ACTIONS.FETCH_PRODUCT_BY_ID:
            return {...state,productByID : action.payload}
        default:
            return {...state}
    }
}

// const rootReducer = combineReducers(fetchReducer)
const rootReducer = fetchReducer
export default rootReducer