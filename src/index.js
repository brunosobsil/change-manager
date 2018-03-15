import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from './Main';
import Login from './component/Login';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './store/configureStore';

const store = configureStore();

function autenticado()
{
    if(localStorage.getItem('token') != null)
    {
        return true;
    }
}

function verificaAutenticacao(){
    return (
        autenticado() ? (
            <Main />
        ) : (
            <Redirect to="/"/>
        )
    )    
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/inicio" render={verificaAutenticacao}/>
                <Route path='/analistas' render={verificaAutenticacao}/>
                <Route path='/clientes' render={verificaAutenticacao}/>
                <Route path='/janelas' render={verificaAutenticacao}/>
            </Switch>                
        </Router>
    </Provider>,
document.getElementById('root'));
registerServiceWorker();