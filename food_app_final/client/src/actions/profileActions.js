import axios from 'axios';

import { api } from '../utils/globalConstants';
import { GET_PROFILE, PRPFILE_LOADING, GET_ERRORS, SET_PROFILE } from '../types';


export const getProfile = (token) => dispatch => {
    dispatch(setProfileLoading());
    axios({
        method: 'GET',
        url: `${api}/profiles/user`,
        headers: {
            "x-auth-token": token,
        }
    })
        .then(res =>
            // console.log('12gggggggggggggggggggggg', res.data)
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            // console.log("err,", err.response)
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        );
};

export const createProfile = (token, userData) => dispatch => {
    axios({
        method: 'POST',
        url: `${api}/profiles`,
        data: userData,
        headers: {
            "x-auth-token": token,
        }
    })
        .then(res =>
            dispatch({
                type: SET_PROFILE,
                payload: userData
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};


export const editProfile = (token, userData) => dispatch => {
    axios({
        method: 'PUT',
        url: `${api}/profiles`,
        data: userData,
        headers: {
            "x-auth-token": token,
        }
    })
        .then(res => console.log('edited action'))
        .catch(err =>
            console.log("err,", err.response.data.message)
            //   dispatch({
            //     type: GET_ERRORS,
            //     payload: err.response.data
            //   })
        );
};



export const setProfileLoading = () => {
    return {
        type: PRPFILE_LOADING
    };
};