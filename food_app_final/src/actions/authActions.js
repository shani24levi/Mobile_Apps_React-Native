
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../utils/setAuthToken';
import {api} from '../utils/globalConstants';
import {TEST ,GET_ERRORS ,SET_CURRENT_USER} from '../types';

// import { useNavigation } from '@react-navigation/native';
//  const navigation = useNavigation();

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('token', value)
  } catch (e) {
    // saving error
  }
}

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('token')
    if (value !== null) {
      console.log(value);
    }
  } catch (e) {
    // error reading value
  }
}

// removeValue = async () => {
//   try {
//     await AsyncStorage.removeItem('token')
//   } catch (e) {
//     // remove error
//   }
// }


// Register User
export const registerUser = (userData) => dispatch => {
  axios
    .post(`${api}/users`, userData)
    .then(res => console.log(res)) //redirect ?
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post(`${api}/users/login`, userData)
    .then(res => {
      storeData(res.data.token)
      // Set token to Auth header
      setAuthToken(res.data.token);
      // Set current user
      const decoded = jwt_decode(res.data.token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = userData => {
  return {
    type: SET_CURRENT_USER,
    payload: userData
  };
};

// // Log user out
// export const logoutUser = () => dispatch => {
//   // Remove token from localStorage
//   localStorage.removeItem('token');
//   // Remove auth header for future requests
//   setAuthToken(false);
//   // Set current user to {} which will set isAuthenticated to false
//   dispatch(setCurrentUser({}));
// };





export const testA = () => dispatch => {
  dispatch({
    type: TEST,
    payload: "search_query"
  });
};