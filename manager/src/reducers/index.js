import LoginReducer from './LoginReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeListReducer from './EmployeeListReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  userLogin: LoginReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeListReducer
});