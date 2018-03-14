import {combineReducers} from 'redux';
import analistas from './analistaReducer';
import login from './loginReducer'

const rootReducer = combineReducers({
    analistas,
    login
});

export default rootReducer;