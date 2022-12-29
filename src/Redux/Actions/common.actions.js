import axios from "axios"

export const LOADING = "SET LOADING"

export const change_loading = (payload = false) => {
    return {
        type: LOADING,
        payload,
    }
}

// export const sendMessages = customer => async dispatch => {
//     try {
//         const fd = new FormData()
//         fd.append( 'name', customer.name )
//         fd.append( 'phone', customer.phone )
//         fd.append( 'email', customer.email )
//         fd.append( 'message', customer.message )
//         const response = await fetchingDataWithAxiosMiddleware( "POST", ADD_CUSTOMER_MESSAGE, fd )
//         if ( response.status ) {
//             dispatch(setMessage(messages.message_sent))
//         }
//     } catch ( error ) {
//         dispatch(setMessage(messages.network_connection))
//         throw error
//     }
// }


export const fetchingDataWithAxiosMiddleware = async ( method, url, formData ) => {
    const handlerObjectForSend = {
        method,
        url,
        headers : {
            'Content-Type' : 'application/json',
        }
    };
    if ( method !== 'GET' ) {
        handlerObjectForSend.data = formData;
    }
    return axios( handlerObjectForSend );
};