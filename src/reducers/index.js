import cart from './cart';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  cart,
  form: formReducer //give the redux-form reducer to redux, this only happens once no matter how many times we use form
});

export default rootReducer;
