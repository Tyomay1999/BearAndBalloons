import axios from "axios"
import serverUtils from "../../Services/serviceUtils"
import serverUser from "../../Services/serviceUser"

export const LOADING = "LOADING SWITCH"
export const NOTIFICATION = "SET NOTIFICATION"
export const CUSTOMER_DATA = "SET CUSTOMER DATA"
export const SHOW_CUSTOMER_INFO = "CUSTOMER INFO"
export const CLEAR_NOTIFICATION = "CLEAR NOTIFICATION"

export const change_loading = ( payload = false ) => {
    return {
        type: LOADING,
        payload,
    }
}

export const set_notification = ( payload = "" ) => {
    return {
        type: NOTIFICATION,
        payload,
    }
}

export const set_customer_data = ( payload = "" ) => {
    return {
        type: CUSTOMER_DATA,
        payload,
    }
}

export const show_customer_info = (payload = false) => {
    return {
        type: SHOW_CUSTOMER_INFO,
        payload
    }
}

export const clear_notification = () => {
    return {
        type: CLEAR_NOTIFICATION
    }
}



export const send_customer_id = customer_id => async dispatch => {
    try {
        const fd = new FormData()
        fd.append( 'id', customer_id )
        const response = await fetchingDataWithAxiosMiddleware(
            "POST",
            `${ serverUtils.get_server_url() }/user`,
            fd
        )
        if ( response.status ) {
            // dispatch( set_customer_data( response?.data ) )
            if(serverUser.check_user_id(customer_id) || serverUser.check_user_id(customer_id) === 0){
                return dispatch(set_customer_data(serverUser.check_user_id(customer_id)))
            } else {
                return dispatch(set_notification("Wrong id!"))
            }
        }
    } catch ( error ) {
        dispatch( set_notification( "Network error" ) )
    }
}


export const fetchingDataWithAxiosMiddleware = async ( method, url, formData ) => {
    const handlerObjectForSend = {
        method,
        url,
        headers: {
            'Content-Type': 'application/json',
        }
    };
    if ( method !== 'GET' ) {
        handlerObjectForSend.data = formData;
    }
    return axios( handlerObjectForSend );
};