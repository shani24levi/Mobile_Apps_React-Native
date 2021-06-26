import { TEST, SET_CURRENT_USER } from '../types';

const initialState = {
  user: {},
  token: ''
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      // console.log('action.token', action.token);
      return {
        ...state,
        user: action.payload,
        token: action.token
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