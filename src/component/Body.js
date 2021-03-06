import React, { Component } from 'react';
import '../css/Body.css';
import SideMenu from './SideMenu';
import Content from './Content';
import Analistas from './Analistas';
import Clientes from './Clientes';
import Janelas from './Janelas';
import { Switch, Route } from 'react-router-dom'

export default class Body extends Component{    
    
    render(){
        return(            
            <div className="body">
                <SideMenu showMenu={this.props.showMenu}/>                                
                <Switch>
                    <Route path='/inicio' component={Content}/>
                    <Route path='/analistas' component={Analistas}/>
                    <Route path='/clientes' component={Clientes}/>
                    <Route path='/janelas' component={Janelas}/>
                </Switch>                
            </div>
        );
    }
}