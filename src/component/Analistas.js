import React, {Component} from 'react';
import '../css/Content.css';
import { Card, Button, CardHeader, CardBody, CardText, Table } from 'reactstrap';


export default class Analistas extends Component{

    constructor(){
        super();
        this.state = {
            analistas: [
                {
                    usuario: 'bsobral.tech',
                    nome: 'Bruno Sobral',
                    email: 'bsobral.tech@qgep.com.br'
                },
                {
                    usuario: 'lnunes.tech',
                    nome: 'Leandro Nunes',
                    email: 'lnunes.tech@qgep.com.br'
                },
                {
                    usuario: 'fnicolau.korus',
                    nome: 'Fernando Nicolau',
                    email: 'fnicolau.korus@qgep.com.br'
                }
            ]
        };
    }

    renderAnalista(analista, indice){
        return(
            <tr key={indice}>
                <td style={{textAlign: 'center'}}>
                    <div className="checkbox">
                        <input type="checkbox" value={analista.usuario}/>
                    </div>
                </td>
                <td>{analista.usuario}</td>
                <td>{analista.nome}</td>
                <td>{analista.email}</td>
            </tr>
        );
    }

    render(){
        return(            
            <div className="content">
                <Card>
                    <CardHeader style={{ backgroundColor: '#f27324', color: '#fff'}}>Cadastro de Analistas</CardHeader>
                    <CardBody>
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