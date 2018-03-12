import React, {Component} from 'react';
import '../css/Login.css';

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            usuario: '',
            senha: ''
        }
    }

    render(){
        return(
            <div className="container-geral">
                <h1>Login</h1>
            </div>
        );
    }
}