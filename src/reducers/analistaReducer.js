import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function analistaReducer(state = initialState.analistas, action) {  
    switch(action.type) {
        case types.INCLUIR_ANALISTA:                        
            return [
                ...state,
                action.analista
            ];
        case types.ALTERAR_ANALISTA:
            // Todo
            return action.analistas;
        case types.EXCLUIR_ANALISTA:
            // Todo
            return action.analistas;
        case types.SELECIONAR_ANALISTA:
            let analistas = state;
            analistas.map((a,idx) =>{
                if(a.usuario === action.usuario){
                    a.selecionado = !a.selecionado;
                }                
                return a;
            });            
            return analistas;
        default: 
            return state;
  }
}