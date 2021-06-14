  
import axios from 'axios';

import {api} from '../utils/globalConstants';
import {GET_ACTIVE_FOODS,FOOD_LOADING, GET_FOODS_BY_TYPE} from '../types';

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
          mytype : type
        })
      )
      .catch(err =>
        dispatch({
          type: GET_FOODS_BY_TYPE,
          payload: {},
          mytype : type
        })
      );
  };

export const setFoodLoading = () => {
    return {
      type: FOOD_LOADING
    };
  };