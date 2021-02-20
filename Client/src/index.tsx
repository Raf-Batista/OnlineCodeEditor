import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './main.css';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/CellList';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

const App = () => {
    return (
        <Provider store={store({})}>
            <Router>
                <Navigation />
                <Header />
                <Switch>
                    <Route exact path="/" component={CellList} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));