import { GET_PROFILE, FOOD_LOADING, SET_PROFILE } from '../types';

const initialState = {
    profile: {},
    is_profile: false,
    loading: false,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOOD_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload == null ? {} : action.payload,
                is_profile: action.payload != null ? true : false,
                loading: false
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload,
                is_profile: true,
                loading: false
            };
        default:
            return state;
    }
}