import { combineReducers } from 'redux';
import faveReducer from './modules/faves';

export default combineReducers({
  faveData: faveReducer
});
