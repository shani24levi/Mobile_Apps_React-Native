import { GET_ERRORS } from '../types';

const initialState = {};

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ERRORS:
            console.log('aaa' ,action.payload);
          return action.payload;
        // case CLEAR_ERRORS:
        //   return {};
        default:
          return state;
      }
  }