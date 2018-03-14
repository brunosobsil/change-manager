import React, {Component} from 'react';
import '../css/Login.css';
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

export default class Login extends Component{

    constructor(){
        super();
        this.state = {
            usuario: {
                usuario: this.props.usuario.usuario,
                senha: this.props.usuario.senha
            }
        }
        this.onChangeUsuario = this.onChangeUsuario.bind(this);
        this.onChangeSenha   = this.onChangeSenha.bind(this);
    }

    onChangeUsuario(e){
        const usuario = {
            usuario: e.target.value            
        }
        this.setState({usuario});
    }

    onChangeSenha(e){
        const usuario = {
            senha: e.target.value
        }
        this.setState(usuario);
    }

    login(){
        e.preventDefault();
        alert(console.log())
    }

    render(){
        return(
            <div className="container-geral">
                <div className="box">
                    <div className="header">
                        <h4>Change Manager</h4>
                    </div>
                    <h4 className="text-center">Login</h4>                    
                    <div className="form-body">
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
                        <div className="botoes">                            
                             <Button block onCLick={(e) => this.login(e)}>Entrar</Button>
                        </div>
                        
                    </Form>
                    </div>
                    <div className="footer">
                        <div className="logo"></div>                    
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {               
    return {
        usuario: state.usuario,
        senha: state.senha
    }
};

const mapDispatchToProps = (dispatch, props) =>{
    return {
        doLogin: (usuario, senha) =>{
            dispatch(actionCreators.doLogin(usuario,senha))
        },
        loginSuccess: (usuario, senha) =>{
            dispatch(actionCreators.loginSuccess(usuario,senha))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);