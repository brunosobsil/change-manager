import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.usuario, action) {  
    switch(action.type) {
        case types.DO_LOGIN:
        
            const url_api = 'localhost:3001/login';
            const header = {
                method: 'post',
                body: JSON.stringify(action.usuario)
            }

            fetch(url_api, header)
                .then((res)=>{
                    console.log(res);
                });
            
            return [
                ...state,
                action.usuario
            ];

        case types.LOGIN_SUCCESS:
            // Todo
            return action.usuario;        
        default: 
            return state;
  }
}