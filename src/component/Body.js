import React, { Component } from 'react';
import '../css/Body.css';
import SideMenu from './SideMenu';
import Content from './Content';

export default class Body extends Component{
    render(){
        return(
            <div className="body">
                <SideMenu/>
                <Content/>
            </div>
        );
    }
}