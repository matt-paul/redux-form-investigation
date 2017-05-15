import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger'

export default(initialState) => {
  return createStore(rootReducer, initialState,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
