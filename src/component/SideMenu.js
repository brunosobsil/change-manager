import React, { Component } from 'react';
import '../css/SideMenu.css';
import ItemMenu from './ItemMenu';

export default class SideMenu extends Component{

    constructor(props){
        super(props);
        this.state = {
            menu: [
                [ "fa fa-id-card-o fa-lg",'Analistas','/analistas'],
                [ "fa fa-user-o fa-lg"   ,'Clientes' ,'/clientes' ],
                [ "fa fa-windows fa-lg"  ,'Janelas'  ,'/janelas'  ]
            ]
        }
    }

    render(){
        return(
            <div className={this.props.showMenu ? 'side-menu' : 'side-menu-closed'}>
                {                     
                    this.state.menu.map( (itemMenu) => <ItemMenu menu={itemMenu} linkUrl={itemMenu[2]}/>)
                }
            </div>
        );
    }
}