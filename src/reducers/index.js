import { combineReducers } from 'redux';
import myluckynumbersReducer from './myluckynumbersReducer';
import nylotteryapiReducer from './nylotteryapiReducer';

const rootReducer = combineReducers({
 winners:       myluckynumbersReducer,
 nylotteryapi:  nylotteryapiReducer
}) 

export default rootReducer;