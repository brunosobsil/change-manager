import * as types from './actionTypes';

export function loadAnalistas(){
    return function(dispatch, store){        
        // Será substituido pelo consumo via API
        const analistas = [
            {
                usuario: 'bsobral.tech',
                nome: 'Bruno Sobral',
                email: 'bsobral.tech@qgep.com.br',
                selecionado: false
            },
            {
                usuario: 'lnunes.tech',
                nome: 'Leandro Nunes',
                email: 'lnunes.tech@qgep.com.br',
                selecionado: false

            },
            {
                usuario: 'fnicolau.korus',
                nome: 'Fernando Nicolau',
                email: 'fnicolau.korus@qgep.com.br',
                selecionado: false
            }
        ];        
        dispatch({type: types.CARREGAR_ANALISTAS, analistas});    
    }
}