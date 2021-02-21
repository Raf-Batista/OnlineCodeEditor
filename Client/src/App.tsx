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

export default App

// ReactDOM.render(<App />, document.querySelector('#root'));