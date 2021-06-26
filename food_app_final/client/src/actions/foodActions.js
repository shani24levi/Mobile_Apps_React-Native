
import axios from 'axios';

import { api } from '../utils/globalConstants';
import { GET_ERRORS, GET_ACTIVE_FOODS, FOOD_LOADING, GET_FOODS_BY_TYPE, GET_USER_FOODS, SET_NEW_FOOD, DELETE_FOOD } from '../types';

export const getAvilibalsFoods = () => dispatch => {
  dispatch(setFoodLoading());
  axios
    .get(`${api}/foods/all/avilibals`)
    .then(res =>
      //  console.log('12', res)
      dispatch({
        type: GET_ACTIVE_FOODS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ACTIVE_FOODS,
        payload: {}
      })
    );
};

export const getAvilibalsType = (type) => dispatch => {
  dispatch(setFoodLoading());
  axios
    .get(`${api}/foods/all/search?q=${type}`)
    .then(res =>
      //console.log('12', res)
      dispatch({
        type: GET_FOODS_BY_TYPE,
        payload: res.data,
        mytype: type
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FOODS_BY_TYPE,
        payload: {},
        mytype: type
      })
    );
};

export const getFoodsOfUser = (token) => dispatch => {
  console.log('token', token);
  dispatch(setFoodLoading());
  axios({
    method: 'GET',
    url: `${api}/foods`,
    headers: {
      "x-auth-token": token,
    }
  })
    .then(res =>
      // console.log('data---' , res.data)
      dispatch({
        type: GET_USER_FOODS,
        payload: res.data,
      })
    )
    .catch(err =>
      // console.log(err.response.data)
      dispatch({
        type: GET_USER_FOODS,
        payload: {},
      })
    );
};


export const addFoodItem = (token, userData) => dispatch => {
  axios({
    method: 'POST',
    url: `${api}/foods`,
    data: userData,
    headers: {
      "x-auth-token": token,
    }
  })
    .then(res =>
      dispatch({
        type: SET_NEW_FOOD,
        payload: userData,
        mytype: userData.type
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


export const deleteFoodById = (token, deleteId) => dispatch => {
  axios({
    method: 'DELETE',
    url: `${api}/foods/${deleteId}`,
    headers: {
      "x-auth-token": token,
    }
  })
    .then(res =>
      dispatch({
        type: DELETE_FOOD,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: DELETE_FOOD,
        payload: {}
      })
    );
};







export const setFoodLoading = () => {
  return {
    type: FOOD_LOADING
  };
};