import { combineReducers } from 'redux';
import winnersReducer from './winnersReducer';
import nylotteryapiReducer from './nylotteryapiReducer';

const rootReducer = combineReducers({
 winners:       winnersReducer,
 nylotteryapi:  nylotteryapiReducer
}) 

export default rootReducer;