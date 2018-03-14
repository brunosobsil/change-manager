import * as actions from './actionTypes';

export const doLogin = (usuario) => {
    return {
        type: actions.DO_LOGIN,
        usuario
    }
}

export const LoginSuccess = (usuario) => {
    return {
        type: actions.LOGIN_SUCCESS,
        usuario
    }
}