import { LOADING } from "../Actions/common.actions";

const initialState = {
    loading: false,
    message: '',
}

export const commonReducer = (state = initialState, action) => {
    switch ( action.type ){
        case LOADING:
            return {...state, loading: action.payload}
        default:
            return state
    }
}