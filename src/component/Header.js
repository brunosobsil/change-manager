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
                <Logo/>
                <Navbar userName={this.props.userName} toggleMenu={this.toggleMenu}/>
            </div>
        );
    }
}