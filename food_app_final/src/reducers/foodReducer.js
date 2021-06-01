import { GET_ACTIVE_FOODS ,FOOD_LOADING } from '../types';

const initialState = {
    foods: [],
    loading: false,
};

export const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOOD_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_ACTIVE_FOODS:
            console.log('17');
            return {
                ...state,
                foods: action.payload,
                loading: false
            };
        // case TEST:
        //     return {
        //       ...state,
        //       isAuthenticated: true,
        //       user: action.payload,
        //     };
        default:
            return state;
    }
}