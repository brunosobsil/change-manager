import React, {Component} from 'react';
import '../css/Login.css';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            usuario: '',
            senha: ''
        }
        this.onChangeUsuario = this.onChangeUsuario.bind(this);
        this.onChangeSenha   = this.onChangeSenha.bind(this);
    }

    onChangeUsuario(e){
        this.setState({usuario: e.target.value});
    }

    onChangeSenha(e){
        this.setState({senha: e.target.value});
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
                                <Input type="text" name="usuario" id="usuario" value={this.state.usuario} onChange={(e) => this.onChangeUsuario(e)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="senha" sm={3}>Senha</Label>
                            <Col sm={9}>
                                <Input type="password" name="senha" id="senha" value={this.state.senha} onChange={(e) => this.onChangeSenha(e)} />
                            </Col>
                        </FormGroup>
                        <div className="botoes">                            
                             <Button block>Entrar</Button>
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