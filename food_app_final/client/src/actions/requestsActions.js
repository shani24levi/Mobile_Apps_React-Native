import axios from 'axios';

import { api } from '../utils/globalConstants';
import { GET_ERRORS, GET_REQUESRS_FOR_FOOD, REQUESRS_LOADING, SET_NEW_REQUST, GET_REQUESRS_FOR_USER, DELETE_REQUESR } from '../types';


export const getRequstsByFoodId = (id) => dispatch => {
    dispatch(setRequestLoading());
    axios({
        method: 'GET',
        url: `${api}/requests/food/${id}`,
    })
        .then(res =>
            dispatch({
                type: GET_REQUESRS_FOR_FOOD,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_REQUESRS_FOR_FOOD,
                payload: {}
            })
        );
};

export const getAllRequstsOfUser = (token) => dispatch => {
    dispatch(setRequestLoading());
    axios({
        method: 'GET',
        url: `${api}/requests`,
        headers: {
            "x-auth-token": token,
        }
    })
        .then(res =>
            dispatch({
                type: GET_REQUESRS_FOR_USER,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_REQUESRS_FOR_USER,
                payload: {}
            })
        );
};


export const deleteId = (token, deleteId) => dispatch => {
    dispatch(setRequestLoading());
    axios({
        method: 'DELETE',
        url: `${api}/requests/${deleteId}`,
        headers: {
            "x-auth-token": token,
        }
    })
        .then(res =>
            dispatch({
                type: DELETE_REQUESR,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: DELETE_REQUESR,
                payload: {}
            })
        );
};

export const requstForFood = (token, data) => dispatch => {
    axios({
        method: 'POST',
        url: `${api}/requests`,
        data: data,
        headers: {
            "x-auth-token": token,
        }
    })
        .then(res =>
            dispatch({
                type: SET_NEW_REQUST,
                payload: res.data,
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: {}
            })
        );
};

export const setRequestLoading = () => {
    return {
        type: REQUESRS_LOADING
    };
};