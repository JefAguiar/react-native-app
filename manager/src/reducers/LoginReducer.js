import * as types from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: '',
    loading: false,
    user: null
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            return {
                ...state,
                email: state.email,
                password: state.password,
                error: '',
                loading: ''
            };
        }
        case types.LOGIN_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                loading: false
            };
        }
        case types.LOGIN_FAIL: {
            return {
                ...state,
                error: action.error,
                loading: action.loading
            };
        }
        case types.SET_LOADING: {
            return {
                ...state,
                error: '',
                loading: true,
            };
        }
        case types.SET_EMAIL: {
            return {
                ...state,
                email: action.email
            };
        }
        case types.SET_PASSWORD: {
            return {
                ...state,
                password: action.password
            };
        }
        default:
            return state;
    }
};