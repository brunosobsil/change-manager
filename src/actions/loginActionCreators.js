import * as actions from './actionTypes';

export const doLogin = (usuario) => {
    
    return (dispatch) =>{

        const url_api = 'http://localhost:3001/login' // trocar por variaveis de ambiente
        const reqHeader = new Headers({ 'content-type': 'application/json'});
        const header = {
            method: 'post',
            headers: reqHeader,
            body: JSON.stringify(usuario)
        }
        
        fetch( url_api, header)
            .then((res)=>{
                if(!res.ok){        
                    if(res.status === 401){
                        throw Error('Usuario não autenticado!');
                    }
                    else{
                        throw Error(res.statusText);
                    }
                }
                return res;
            })
            .then((res) => res.json())
            .then((res) => {                
                if(res.usuario){
                    dispatch(loginSuccess(res.usuario));
                }else{
                    dispatch(loginError(res.message));
                }
            })
            .catch((error) => dispatch(loginError(error)));
    };
}

export const loginSuccess = (usuario) => {
        
    return {
        type: actions.LOGIN_SUCCESS,
        usuario        
    }
}

export const loginError = (error) => {    
    
    return {
        type: actions.LOGIN_ERROR,
        mensagem: error
    }
}
