import { GET_REQUESRS_FOR_FOOD, REQUESRS_LOADING, SET_NEW_REQUST, GET_REQUESRS_FOR_USER, DELETE_REQUESR } from '../types';

const initialState = {
    requests: {},
    user_requests: {},
    loading: false,
};

export const requestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESRS_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_REQUESRS_FOR_FOOD:
            return {
                ...state,
                requests: action.payload == null ? {} : action.payload,
                loading: false
            };
        case GET_REQUESRS_FOR_USER:
            // console.log('action' ,action.payload);
            return {
                ...state,
                user_requests: action.payload == null ? {} : action.payload,
                loading: false
            };
        case DELETE_REQUESR:
            return {
                ...state,
                loading: false
            };
        case SET_NEW_REQUST:
            console.log('action', action.payload);
            return {
                ...state,
                user_requests: [...state.user_requests.unshift(action.payload)],
                loading: false
            };

        default:
            return state;
    }
}