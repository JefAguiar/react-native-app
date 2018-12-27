import * as types from '../actions/types';
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';

export const loginSuccess = () => {
    return {
        type: types.LOGIN_SUCCESS,
        email: '',
        password: '',
        error: '',
        loading: false
    };
};

export const loginFail = () => {
    return {
        type: types.LOGIN_FAIL,
        error: 'Authentication failure!',
        loading: false
    };
};

export const setLoading = () => {
    return {
        type: types.SET_LOADING
    };
};

export const setEmail = (email) => {
    return {
        type: types.SET_EMAIL,
        email
    };
};

export const setPassword = (password) => {
    return {
        type: types.SET_PASSWORD,
        password

    };
};

export const loginUser = (email, password) => {

    return (dispatch) => {

        dispatch({ type: types.SET_LOADING });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: types.LOGIN_FAIL,
        error: 'Authentication Failure',
        loading: false
    });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: types.LOGIN_USER_SUCCESS,
        user: user
    });
    Actions.main();
};


