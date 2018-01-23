import React, { Component } from 'react';
import '../css/Logo.css';

export default class Logo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={this.props.showMenu ? 'logo' : 'logo-closed'}>
                <div className="logo-img">                    
                </div>
            </div>
        );
    }
}