import { GET_ACTIVE_FOODS, FOOD_LOADING,GET_FOODS_BY_TYPE } from '../types';

const initialState = {
    foods: [],
    snacks: [],
    drinks:[],
    dairies:[],
    meats: [],
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
            return {
                ...state,
                foods: action.payload,
                loading: false
            };
        case GET_FOODS_BY_TYPE:
            console.log();
            return {
                ...state,
                snacks: action.mytype=='snack' ? action.payload: state.snacks,
                drinks: action.mytype=='drink' ? action.payload: state.drinks,
                dairies: action.mytype=='dairy' ? action.payload: state.dairies,
                meats: action.mytype=='meat' ? action.payload: state.meats,
                loading: false,
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