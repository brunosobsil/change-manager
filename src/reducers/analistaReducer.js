import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function analistaReducer(state = initialState.analistas, action) {  
    switch(action.type) {
        case types.ADD_ANALISTA:                                    
            const urlApi = 'https://5a9eed5f29d04a00142ff7d6.mockapi.io/analistas';
            const header = {
                method: 'post',
                body: JSON.stringify(action.analista)
            }
            
            fetch( urlApi, header)
                .then((res)=>{
                    console.log(res);    
                });
            
            return [
                ...state,
                action.analista
            ];

        case types.UPDATE_ANALISTA:
            // Todo
            return action.analistas;
        case types.DELETE_ANALISTA:
            // Todo
            return action.analistas;
        case types.SELECT_ANALISTA:
            let analistas = state;
            analistas.map((a,idx) =>{
                if(a.usuario === action.usuario){
                    a.selecionado = !a.selecionado;
                }                
                return a;
            });            
            return analistas;
        case types.FETCH_ANALISTAS:
            return action.analistas;
        default: 
            return state;
  }
}