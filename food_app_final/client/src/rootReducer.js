import { combineReducers } from 'redux';
import { authReducer } from './reducers/authReducer';
import { errorReducer } from './reducers/errorReducer';
import { foodReducer } from './reducers/foodReducer';
import { profileReducer } from './reducers/profileReducer';
import { requestsReducer } from './reducers/requestsReducer';


export const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  foods: foodReducer,
  profile: profileReducer,
  requests: requestsReducer,
});