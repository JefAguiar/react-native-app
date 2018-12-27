import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
};

export const employeeCreate = ({ name, phone, shift }) => {

    return (dispatch) => {

        const { currentUser } = firebase.auth();

        let employee = { name, phone, shift };

        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push(employee)
            .then(() => {
                dispatch({
                    type: EMPLOYEE_CREATE
                });
                Actions.employeeList({ type: 'reset' });
            });
    }
};

export const employeesFetch = () => {
    
    return dispatch => {

        const { currentUser } = firebase.auth();

        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({
                    type: EMPLOYEES_FETCH_SUCCESS,
                    payload: snapshot.val()
                });
            });
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    
    return (dispatch) => {

        const { currentUser } = firebase.auth();

        let employee = {
            name,
            phone,
            shift
        };

        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set(employee)
            .then(() => {
                dispatch({
                    type: EMPLOYEE_SAVE
                });
                Actions.employeeList({ type: 'reset' });
            });
    }
};

export const employeeDelete = ({ uid }) => {
   
    const { currentUser } = firebase.auth();

    return () => {

        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.employeeList({ type: 'reset' });
            });
    }
};