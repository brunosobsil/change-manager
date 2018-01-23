import React, { Component } from 'react';
import './css/Main.css';
import Header from './component/Header';
import Body from './component/Body';

export default class Main extends Component {

  constructor(){
    super();
    
    this.state = {
      userName: 'Fulano da Silva',
      showMenu: true
    };

    this.toggleMenu = this.toggleMenu.bind(this);

  }

  toggleMenu(){
     
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    return (
      <div className="container">  
        <Header userName={this.state.userName} toggleMenu={this.toggleMenu} showMenu={this.state.showMenu}/>
        <Body showMenu={this.state.showMenu}/>
      </div>
    );
  }
}
