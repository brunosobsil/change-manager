import * as actions from './actionTypes';

export const addAnalista = (analista) => {
    return {
        type: actions.ADD_ANALISTA,
        analista
    }
}

export const selectAnalista = (usuario) =>{
    return{
        type: actions.SELECT_ANALISTA,
        usuario
    }
}

export const fetchAnalistas = (analistas) =>{
    return{
        type: actions.FETCH_ANALISTAS,
        analistas
    }
}