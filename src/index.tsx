import 'bulmaswatch/superhero/bulmaswatch.min.css';
import './main.css';
import ReactDOM from 'react-dom'; 
import CodeCell from './components/CodeCell';

const App = () => {
  
    return (
        <div>
            <CodeCell />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))