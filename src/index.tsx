import 'bulmaswatch/superhero/bulmaswatch.min.css';
import './main.css';
import { useState, useEffect, useRef } from 'react'; 
import ReactDOM from 'react-dom'; 
import JavaScriptCodeEditor from './components/JavaScriptCodeEditor';
import RubyCodeEditor from './components/RubyCodeEditor';
import ElixirCodeEditor from './components/ElixirCodeEditor';
import Preview from './components/Preview';
import bundle from './bundler'

const App = () => {
  
    const [input, setInput] = useState(''); 
    const [code, setCode] = useState('');

    const handleClick = async () => {
        const output = await bundle(input);
        setCode(output);
    };

    return (
        <div>
            <JavaScriptCodeEditor 
                initialValue="const a = 1;"
                onChange={(value) => setInput(value)}
            />
            <div>
                <button onClick={handleClick}>Submit</button>
            </div>
            <Preview code={code}/>
            {/* <RubyCodeEditor />
            <ElixirCodeEditor /> */}
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))