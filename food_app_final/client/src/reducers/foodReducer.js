import { DELETE_FOOD, SET_NEW_FOOD, GET_ACTIVE_FOODS, FOOD_LOADING, GET_FOODS_BY_TYPE, GET_USER_FOODS } from '../types';

const initialState = {
    foods: [],
    snacks: [],
    drinks: [],
    dairies: [],
    meats: [],
    user_food: [],
    length:0,
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
                length:action.payload.length,
                loading: false
            };
        case GET_FOODS_BY_TYPE:
            console.log();
            return {
                ...state,
                snacks: action.mytype == 'snack' ? action.payload : state.snacks,
                drinks: action.mytype == 'drink' ? action.payload : state.drinks,
                dairies: action.mytype == 'dairy' ? action.payload : state.dairies,
                meats: action.mytype == 'meat' ? action.payload : state.meats,
                loading: false,
            };
        case GET_USER_FOODS:
            // console.log('aaa', action.payload);
            return {
                ...state,
                user_food: action.payload,
                loading: false,
            };
        case SET_NEW_FOOD:
            
            action.payload == "" ? state.foods : state.foods.unshift(action.payload);
            return {
                ...state,
                foods: [...state.foods],
                snacks: action.mytype == 'snack' ? [...state.snacks.unshift(action.payload)] : state.snacks,
                drinks: action.mytype == 'drink' ? [...state.drinks.unshift(action.payload)] : state.drinks,
                dairies: action.mytype == 'dairy' ? [...state.dairies.unshift(action.payload)] : state.dairies,
                meats: action.mytype == 'meat' ? [...state.meats.unshift(action.payload)] : state.meats,
                length: state.foods.length+1,
                loading: false,
            };
        case DELETE_FOOD:
            return {
                ...state,
                length: state.foods.length-1,
                loading: false
            };
        default:
            return state;
    }
}