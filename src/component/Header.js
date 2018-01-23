import React, { Component } from 'react';
import '../css/Header.css';
import Logo from './Logo'; 
import Navbar from './Navbar';

export default class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="header">
                <Logo showMenu={this.props.showMenu}/>
                <Navbar userName={this.props.userName} toggleMenu={this.props.toggleMenu}/>
            </div>
        );
    }
}