import { combineReducers } from 'redux';
import { searchReducer } from './Redux/searchReducer';

export const rootReducer = combineReducers({
  search: searchReducer,
});