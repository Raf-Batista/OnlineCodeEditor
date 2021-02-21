import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './main.css';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import { store } from './state';
import { Header, Navigation, CellList, Signup, Login  } from './components';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Provider store={store({})}>
            <Router>
                <Navigation />
                <Header />
                <Switch>
                    <Route exact path="/" component={CellList} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));