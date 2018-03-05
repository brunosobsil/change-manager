import * as actions from './actionTypes';

export const addAnalista = (analista) => {
    return {
        type: actions.INCLUIR_ANALISTA,
        analista
    }
}

export const selectAnalista = (usuario) =>{
    return{
        type: actions.SELECIONAR_ANALISTA,
        usuario
    }
}