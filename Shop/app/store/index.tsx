import {createStore, applyMiddleware, compose} from 'redux';
import rootReduser from './rootReducer';
import {composeWithDevTools} from 'remote-redux-devtools';
import logger from 'redux-logger';

const middleware = [logger];
export const store = createStore(
  rootReduser,
  compose(composeWithDevTools(applyMiddleware(...middleware))),
);
