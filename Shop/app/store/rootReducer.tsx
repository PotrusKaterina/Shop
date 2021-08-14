import {combineReducers} from 'redux';

import {appReducers} from './reducers/appReducers';

const rootReducer = combineReducers({
  app: appReducers,
});

export default rootReducer;
