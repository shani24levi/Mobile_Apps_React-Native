import { GET_ERRORS, AUTH_TOKEN } from '../types';

const initialState = {};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      console.log('action.payload err', action.payload);
      return action.payload;
    case AUTH_TOKEN:
      console.log('action.payload', action.payload);
      return action.payload;
    default:
      return state;
  }
}