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
import Signin from './components/Signin';


const App = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    let loggedInUser = {};
    useEffect(() => {
        if (localStorage.getItem('loggedIn')) {
            const user: string | null = localStorage.getItem('user')
            loggedInUser = JSON.parse(user || '')
            setLoggedIn(true);
        };
    }, [])

    return (
        <Provider store={store({})}>
            <Router>
                <Navigation loggedIn={loggedIn} user={loggedInUser} />
                <Header />
                <Switch>
                    <Route exact path="/" component={CellList} />
                    <Route exact path="/signin" component={Signin} />
                </Switch>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));