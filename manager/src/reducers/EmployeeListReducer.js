import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default EmployeeListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};