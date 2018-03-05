import {combineReducers} from 'redux';
import analistas from './analistaReducer.js';

const rootReducer = combineReducers({
    analistas
});

export default rootReducer;