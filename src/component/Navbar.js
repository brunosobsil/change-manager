import React, { Component } from 'react';
import '../css/Navbar.css';

export default class Navbar extends Component{

    render(){
        return(
            <div className="navbar">
                <div className="menu-toggle" onClick={this.props.toggleMenu}></div>
                <div className="logo-company"></div>
                <div className="userProfile">
                    <div className="avatar" onClick={() => alert('clicou')}></div>
                    <div className="userName">{this.props.userName}</div>
                </div>
            </div>
        );
    }
}