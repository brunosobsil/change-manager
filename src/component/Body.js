import React, { Component } from 'react';
import '../css/Body.css';
import SideMenu from './SideMenu';
import Content from './Content';

export default class Body extends Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="body">
                <SideMenu showMenu={this.props.showMenu}/>
                <Content/>
            </div>
        );
    }
}