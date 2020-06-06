import { combineReducers } from 'redux';
import { changeNumber } from './changeNumber';

export const Reducers = combineReducers({

    changeNumber : changeNumber

});