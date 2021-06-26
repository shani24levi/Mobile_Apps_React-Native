
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../utils/setAuthToken';
import { api } from '../utils/globalConstants';
import { TEST, GET_ERRORS, SET_CURRENT_USER, AUTH_TOKEN } from '../types';


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


// Register User
export const registerUser = (userData) => dispatch => {
  axios
    .post(`${api}/users`, userData)
    .then(res => console.log(res))
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
      dispatch(setCurrentUser(decoded, res.data.token));
    })
    .catch(err => {//console.log('err')
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    }
    );
};

// Set logged in user
export const setCurrentUser = (userData, token) => {
  return {
    type: SET_CURRENT_USER,
    payload: userData,
    token: token
  };
};


export const authToken = (value) => dispatch => {
  // v = getData()
  axios({
    method: 'GET',
    url: `${api}/users/auth`,
    headers: {
      "x-auth-token": value,
    }
  })
    .then(res =>
      // console.log(res.data)
      dispatch(setCurrentUser(jwt_decode(value), value))
      // dispatch({
      //   type: AUTH_TOKEN,
      //   payload: res.data,
      // })
    )
    .catch(err =>
      //  console.log(res.err)

      dispatch({
        type: AUTH_TOKEN,
        payload: err.response.data,
      })
    );
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

