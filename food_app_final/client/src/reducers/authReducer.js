import {TEST,SET_CURRENT_USER} from '../types';

const initialState = {
  user: {}
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };
    case TEST:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
    default:
      return state;
  }
}