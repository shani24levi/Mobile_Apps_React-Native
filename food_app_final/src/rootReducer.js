import { combineReducers } from 'redux';
import { searchReducer } from './reducers/searchReducer';
import { authReducer } from './reducers/authReducer';
import { errorReducer } from './reducers/errorReducer';
import { foodReducer } from './reducers/foodReducer';


export const rootReducer = combineReducers({
  search: searchReducer,
  auth: authReducer,
  errors: errorReducer,
  foods: foodReducer,
});