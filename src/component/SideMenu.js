import React, { Component } from 'react';
import '../css/SideMenu.css';

export default class SideMenu extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={this.props.showMenu ? 'side-menu' : 'side-menu-closed'}></div>
        );
    }
}