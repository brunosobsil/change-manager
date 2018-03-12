import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../css/Content.css';
import * as actionCreators from '../actions/analistaActionCreators';
import { Card, Button, CardHeader, CardBody, Table, Form, FormGroup, Label, Input, Col } from 'reactstrap';


class Analistas extends Component{

    constructor(props){        
        
        super(props);

        this.onClickASalvar = this.onClickSalvar.bind(this);
        this.onChangeUsuario = this.onChangeUsuario.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSelectAnalista = this.onSelectAnalista.bind(this);
        this.renderAnalista = this.renderAnalista.bind(this);
        this.checkDisable = this.checkDisable.bind(this);
        this.limpaForm = this.limpaForm.bind(this);        

        this.state = {
            usuario: '',
            nome: '',
            email: ''                        
        }

    }

    onSelectAnalista(e){
        
        const usuario = e.target.value;
        this.props.selectAnalista(usuario);
        
    }

    renderAnalista(analista, indice){
        return(
            <tr key={indice}>
                <td style={{textAlign: 'center'}}>
                    <div className="checkbox">
                        <input type="checkbox" value={analista.usuario} onClick={(e) => this.onSelectAnalista(e)} />
                    </div>
                </td>
                <td>{analista.usuario}</td>
                <td>{analista.nome}</td>
                <td>{analista.email}</td>
            </tr>
        );
    }

    onChangeUsuario(e){
        this.setState({usuario: e.target.value});
    }

    onChangeNome(e){
        this.setState({nome: e.target.value});
    }

    onChangeEmail(e){
        this.setState({email: e.target.value});
    }

    onClickSalvar(e){
        
        let novoAnalista = {
            usuario: this.state.usuario,
            nome: this.state.nome,
            email: this.state.email,
            selecionado: false
        };               
        
        this.props.addAnalista(novoAnalista);
        this.limpaForm();
    }

    checkDisable(){
        let disable = false;
        if(!this.state.usuario || !this.state.nome || !this.state.email){
            disable = true;
        }
        return disable;
    }

    limpaForm(){
        this.setState({usuario: ''});
        this.setState({nome: ''});
        this.setState({email: ''});   
    }

    async getAnalistas(){
        
        const urlApi = 'https://5a9eed5f29d04a00142ff7d6.mockapi.io/analistas';
        const response = await fetch(urlApi);
        const analistas = await response.json();

        return analistas;
    }

    async componentWillMount(){                
        const analistas = await this.getAnalistas();        
        this.props.fetchAnalistas(analistas);
    }

    render(){
        return(            
            <div className="content">
                <Card>
                    <CardHeader style={{ backgroundColor: '#f27324', color: '#fff'}}>Cadastro de Analistas</CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup row>
                                <Label for="usuarioAnalista" sm={2}>Usu&aacute;rio</Label>
                                <Col sm={2}>
                                    <Input type="text" name="usuario" id="usuarioAnalista" value={this.state.usuario} onChange={(e) => this.onChangeUsuario(e)} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="nomeAnalista" sm={2}>Nome</Label>
                                <Col sm={4}>
                                    <Input type="text" name="nome" id="nomeAnalista" value={this.state.nome} onChange={(e) => this.onChangeNome(e)}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="emailAnalista" sm={2}>Email</Label>
                                <Col sm={4}>
                                    <Input type="email" name="email" id="emailAnalista" value={this.state.email} onChange={(e) => this.onChangeEmail(e)}/>
                                </Col>
                                <Col sm={1}>
                                    <Button onClick={(e) => this.onClickSalvar(e)} disabled={this.checkDisable()}>Salvar</Button>
                                </Col>

                            </FormGroup>                            
                        </Form>
                        <Table size="sm" responsive hover bordered>
                            <thead style={{backgroundColor: '#d0d8db'}}>
                                <tr>
                                    <th></th>
                                    <th>Usu&aacute;rio</th>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.analistas.map(this.renderAnalista)}
                            </tbody>
                        </Table> 
                    </CardBody>                
              </Card>              
            </div>            
        );
    }
}

const mapStateToProps = (state) => {               
    return {
        analistas: state.analistas
    }
};

const mapDispatchToProps = (dispatch, props) =>{
    return {
        addAnalista: (analista) =>{
            dispatch(actionCreators.addAnalista(analista))
        },
        selectAnalista: (usuario) =>{
            dispatch(actionCreators.selectAnalista(usuario))
        },
        fetchAnalistas: (analistas) =>{
            dispatch(actionCreators.fetchAnalistas(analistas))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Analistas);