import React, {Component} from 'react';
import '../css/Login.css';
import * as actionCreators from '../actions/loginActionCreators';
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom'

class Login extends Component{

    constructor(props){
        
        super(props);               
        this.onChangeUsuario = this.onChangeUsuario.bind(this);
        this.onChangeSenha   = this.onChangeSenha.bind(this);
        this.onLogin = this.onLogin.bind(this);

        this.state = {
            usuario: {
                usuario: '',
                senha: ''
            },
            logado: false,
            erro: false,
            mensagem: ''           
        }
        
    }

    onChangeUsuario(e){
        const usuario = {
            usuario: e.target.value,
            senha: this.state.usuario.senha            
        }
        this.setState({usuario});
    }

    onChangeSenha(e){
        const usuario = {
            usuario: this.state.usuario.usuario,
            senha: e.target.value
        }
        this.setState({usuario});
    }

    onLogin(e){
        e.preventDefault();
        this.props.doLogin(this.state.usuario);
    }

    componentWillReceiveProps(props){
        
        if(props.logado){
            localStorage.setItem('token', props.usuario.token);
            this.props.history.push('/inicio');
        }
        
        if(props.erro){
            alert(props.mensagem.message);
        }
    }

    render(){
        return(
            <div className="login-container-geral">
                <div className="login-box">
                    <div className="login-header">
                        <h4>Change Manager</h4>
                    </div>
                    <h4 className="login-text-center">Login</h4>                    
                    <div className="login-form-body">
                    <Form>
                        <FormGroup row>
                            <Label for="usuario" sm={3}>Usu&aacute;rio</Label>
                            <Col sm={9}>
                                <Input type="text" name="usuario" id="usuario" value={this.state.usuario.usuario} onChange={(e) => this.onChangeUsuario(e)} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="senha" sm={3}>Senha</Label>
                            <Col sm={9}>
                                <Input type="password" name="senha" id="senha" value={this.state.usuario.senha} onChange={(e) => this.onChangeSenha(e)} />
                            </Col>
                        </FormGroup>                        
                        
                        <div className="login-botoes">                            
                             <Button block onClick={(e) => this.onLogin(e)}>Entrar</Button>
                        </div>
                        
                    </Form>                    
                    </div>
                    <div className="login-footer">
                        <div className="login-logo"></div>                    
                    </div>
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {                   
    console.log(state);
    return {
        usuario: state.login.usuario,
        logado: state.login.logado,
        erro: state.login.erro,    
        mensagem: state.login.mensagem || ''
    }
};

const mapDispatchToProps = (dispatch, props) =>{
    return {
        doLogin: (usuario) =>{
            dispatch(actionCreators.doLogin(usuario))
        }        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));