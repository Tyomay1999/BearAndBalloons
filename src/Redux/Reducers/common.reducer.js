import {
    LOADING,
    NOTIFICATION,
    CUSTOMER_DATA,
    SHOW_CUSTOMER_INFO,
    CLEAR_NOTIFICATION, SECRET_KEY
} from "../Actions/common.actions";
import serviceUser from "../../Services/serviceUser";

const initialState = {
    loading: false,
    notification: '',
    show_info: false,
    customer_data: null,
    is_secret_key: false
}

export const commonReducer = (state = initialState, action) => {
    switch ( action.type ){
        case LOADING:
            return {...state, loading: action.payload}
        case NOTIFICATION:
            return {...state, notification: action.payload}
        case CLEAR_NOTIFICATION:
            return {...state, notification: ""}
        case SHOW_CUSTOMER_INFO:
            return {...state, show_info: action.payload}
        case CUSTOMER_DATA:
            return {...state, customer_data: serviceUser.get_user(action.payload)}
        case SECRET_KEY:
            return {...state, is_secret_key: action.payload}
        default:
            return state
    }
}