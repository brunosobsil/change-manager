import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.usuario, action) {  
    switch(action.type) {
        
        case types.LOGIN_SUCCESS:
            return {usuario: action.usuario, logado: true};
        case types.LOGIN_ERROR:
            console.log(action);
            return {usuario: state.usuario, logado: false, erro: true, mensagem: action.mensagem};            

        default:            
            return state;
  }
}