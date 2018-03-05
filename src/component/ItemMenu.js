import React, {Component} from 'react';
import '../css/ItemMenu.css';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';

export default class ItemMenu extends Component{

    render(){
        return(
            <Link to={this.props.linkUrl}>
                <div className="itemMenu">                                    
                    <div className="icon-menu"><i className={this.props.menu[0]}/></div>
                    <div className="text-menu">{this.props.menu[1]}</div>
                </div>
            </Link>
        );
    }
}