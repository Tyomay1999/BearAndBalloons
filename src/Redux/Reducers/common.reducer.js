import {
    LOADING,
    NOTIFICATION,
    CUSTOMER_DATA,
    SHOW_CUSTOMER_INFO
} from "../Actions/common.actions";
import serviceUser from "../../Services/serviceUser";

const initialState = {
    loading: false,
    notification: '',
    show_info: false,
    customer_data: null,
}

export const commonReducer = (state = initialState, action) => {
    switch ( action.type ){
        case LOADING:
            return {...state, loading: action.payload}
        case NOTIFICATION:
            return {...state, notification: action.payload}
        case SHOW_CUSTOMER_INFO:
            return {...state, show_info: action.payload}
        case CUSTOMER_DATA:
            return {...state, customer_data: serviceUser.get_user(action.payload)}
        default:
            return state
    }
}