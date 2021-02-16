import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './main.css';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/CellList';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { useEffect } from 'react';


const App = () => {
    return (
        <Provider store={store({})}>
            <div>
                <Navigation />
                <Header />
                <CellList />
            </div>
        </Provider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));