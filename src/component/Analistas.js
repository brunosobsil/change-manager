import React, {Component} from 'react';
import '../css/Content.css';
import { Card, Button, CardHeader, CardBody, CardText, Table, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';


export default class Analistas extends Component{

    constructor(){
        
        super();
        this.onClickAdicionar = this.onClickAdicionar.bind(this);
        this.onChangeUsuario = this.onChangeUsuario.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSelectAnalista = this.onSelectAnalista.bind(this);
        this.renderAnalista = this.renderAnalista.bind(this);
        this.checkDisable = this.checkDisable.bind(this);
        this.limpaForm = this.limpaForm.bind(this);

        this.state = {
            usuario : '',
            nome : '',
            email: '',
            analistas: [
                {
                    usuario: 'bsobral.tech',
                    nome: 'Bruno Sobral',
                    email: 'bsobral.tech@qgep.com.br',
                    selecionado: false
                },
                {
                    usuario: 'lnunes.tech',
                    nome: 'Leandro Nunes',
                    email: 'lnunes.tech@qgep.com.br',
                    selecionado: false

                },
                {
                    usuario: 'fnicolau.korus',
                    nome: 'Fernando Nicolau',
                    email: 'fnicolau.korus@qgep.com.br',
                    selecionado: false
                }
            ]
        };


    }    

    onSelectAnalista(e){
        
        const usuario = e.target.value;
        let analistas = this.state.analistas.slice();

        analistas.map((a, idx) =>{            
            if(a.usuario === usuario){
                analistas[idx].selecionado = !analistas[idx].selecionado;
            }
        });

        this.setState({analistas});        
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

    onClickAdicionar(e){
        
        let analistas = this.state.analistas.slice();
        let novoAnalista = {
            usuario: this.state.usuario,
            nome: this.state.nome,
            email: this.state.email,
            selecionado: false
        };               
        
        analistas.push(novoAnalista);
        this.limpaForm();        

        this.setState({analistas});
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
                                    <Button onClick={(e) => this.onClickAdicionar(e)} disabled={this.checkDisable()}>Adicionar</Button>
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
                                {this.state.analistas.map(this.renderAnalista)}
                            </tbody>
                        </Table> 
                    </CardBody>                
              </Card>              
            </div>            
        );
    }
}