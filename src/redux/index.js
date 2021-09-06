import { createStore, combineReducers } from 'redux';
import { numReducer } from './NumReducer';
import { loginStatusReducer } from './LoginReducer';

const reducer = combineReducers({
  numReducer,
  loginStatusReducer,
});

const store = createStore(reducer);

export default store;
